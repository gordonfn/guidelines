const fs = require('fs')
const parse = require('csv-parse')
const normalize = require('../../datastream-import/import/calc/normalize')  // for unit testing

// Metadata
const json = {}

const updateObjProp = (obj, propPath, value) => {
  const [head, ...rest] = propPath.split('.')

  if (rest.length && !obj[head]) obj[head] = {}

  !rest.length
    ? obj[head] = value
    : updateObjProp(obj[head], rest.join('.'), value)
}

// HTML Preview
const htmlPromises = []
let html = '<html><head></head><body>'
// https://docs.mathjax.org/en/latest/options/accessibility.html
let mathjax = require('mathjax').init({
  loader: {load: ['input/tex', 'output/svg', 'output/chtml']},
  /*options: {
    enableEnrichment: true,
    enrichSpeech: 'deep',
    a11y:{
      speech: true,
      braille: true,
      subtitles: true,
      speechRules: 'mathspeak-default',
    }
  }*/
}) // need node 14 to support root await

const buildHtml = async (name, formula) => {
  const MathJax = await mathjax
  const svg = MathJax.tex2svg(formula, {display: true});
  //const chtml = MathJax.tex2chtml(formula, {display: true});
  //console.log(MathJax.startup.adaptor.outerHTML(svg));
  //console.log(MathJax.startup.adaptor.outerHTML(chtml));

  html += `<br><br>${name}<br>${MathJax.startup.adaptor.outerHTML(svg)}`
}

// Formula Code
const params = Object.keys(require('../formula_params.json'))
params.push('hardness')
const hardnessParams = ['TH', 'CaCO3', 'CH', 'NCH', 'Ca', 'Mg', 'CaIon', 'MgIon', 'hardness']
let code = `
/* This page is generated during the build process. */
const math = require('./math')
const calculateHardness = require('./hardness')
`

const buildCode = (name, formula, multiplier = 1) => {
  //console.log('|>', formula)
  formula = formula
    // math formulas
    .replace(/log_(\d+)\(([^\{\}]*?)\)/g, 'log($2, $1)')
    .replace(/ln\(([^\{\}]*?)\)/g, 'log($1, e)')
    .replace(new RegExp(`(\\)|\\d+|${params.join('|')})\\^\\{([^\\{\\}]*?)\\}`, 'g'), 'pow($1, $2)')  // 10^x, pH^2
    .replace(/e\^\{([^\{\}]*?)\}/g, 'exp($1)')
    .replace(/\{([^\{\}]*?) \\over ([^\{\}]*?)\}/g, '(($1)/($2))')
    .replace(/\{([^\{\}]*?) \\over ([^\{\}]*?)\}/g, '(($1)/($2))')  // Allow for nested
    // excess brackets
    .replace(/\[([^\[\]]*?)\]/g, '($1)')
    .replace(/\[([^\[\]]*?)\]/g, '($1)')  // Allow for nested
    // multipliers
    .replace(new RegExp(`(\\)|\\d+)\\s*(\\(|exp|pow|ln|log|${params.join('|')})`, 'g'), '$1*$2')
    .replace(/×/g, '*')
    // Logic wrapper
    .replace(/([≤≥<>=]) (\w+) ([≤≥<>=])/g, '$1 $2 && $2 $3')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/∧/g, '&&')
    .replace(/∨/g, '||')
    .replace(/ == /g, ' === ')
    .replace(/\\\{ ([\d\.]+) \\\}/g, '{\n    return $1\n  }')
    .replace(/\\\{ (.*?) \\\}/g, '{\n    return math.evaluate(`$1`)\n  }')

  if (!formula.includes('if')) {
    formula = `return math.evaluate(\`${formula}\`)`
  }
  // variables
  const variables = [] // existing variables
  const hardness = [] // existing variables for hardness
  for (const param of params) {
    if (!formula.includes(param)) continue

    if (hardnessParams.includes(param)) hardness.push(param)
    else variables.push(param)

    formula = formula.split('\n').map(condition => {
      if (!condition.includes('math.evaluate')) return condition
      return condition.replace(new RegExp(`([^a-zA-Z]+)(${param})`, 'g'), '$1${$2}')
    }).join('\n')
  }

  formula = formula.split('\n').map(condition => {
    if (condition.includes('return') && multiplier !== 1) condition += `*${multiplier}` // formula normalization
    return condition
  }).join('\n')

  const fallbackMatch = formula.match(/else \{\sreturn ([\d\.]+)\s\}$/)
  const fallback = fallbackMatch ? fallbackMatch[1] : 'null'

  formula = `
const ${name} = (params) => {
  ${hardness.length ? `const hardness = calculateHardness(params)` : ``}
  ${hardness.length ? `if ( !math.isValid(hardness) ) { return ${fallback} }` : ``}
  ${variables.length ? `const { ${variables.join(', ')} } = params` : ''}
  ${variables.length ? `if ( !math.isValid(${variables.join(') || !math.isValid(')}) ) { return null }` : ''}
  ${formula}
  ${(formula.indexOf('return') !== 0 && !formula.includes('else {')) ? `return null` : ''}
}
`
  code += formula.replace(/\n\s*\n/g, '\n')
  return formula
}

const parseGuideline = (row, multiplier = 1) => {
  let value = row['Value']

  // Value
  if (value.toString() === Number.parseFloat(value).toString()) {
    return ['value', Number.parseFloat(value)*multiplier]
  }
  // Range
  if (value.match(/^[\d.]+-[\d.]+$/)) return ['range', value.split('-').map(v => Number.parseFloat(v)*multiplier)]

  // Formula
  if (value.length) {
    const region = row['Region'].split(',').map(v => v.trim())[0].replace('-', '')

    const formulaName =
      row['Media Name'].replace(' ', '').toLowerCase() + '_'
      + row['Freshwater or Marine'].replace(' ', '') + '_'
      + row['Guideline Type'].replace(' ', '') + '_'
      + row['Characteristic Name'].replace(/[^a-zA-Z0-9]/g, '') + '_'
      + row['Method Speciation'].replace(' ', '') + '_'
      + row['Sample Fraction'].replace(' ', '') + '_'
      + region

    buildCode(formulaName, value, multiplier)
    htmlPromises.push(buildHtml(formulaName, value))  // ugly hack

    return ['formula', formulaName]
  }
  return [null, null]
}

const data = fs.readFileSync(__dirname + '/../lib/Guidelines.csv')
parse(data, {
  columns: true
}, (err, output) => {
  let count = 0

  const formulaNames = []

  for (const row of output) {
    if (!row['Characteristic Name']) {
      console.log(`skip ${row['Guideline Publisher']} ${row['Guideline Name']} ${row['Parameter']} from ${row['Region']}: Characteristic Name missing`)
      continue
    }
    if (!row['Value']) {
      console.log(`skip ${row['Guideline Publisher']} ${row['Guideline Name']} ${row['Parameter']} from ${row['Region']}: Value missing ***`)
      continue
    }
    if (['Historical'].includes(row['Status'])) {
      console.log(`skip ${row['Guideline Publisher']} ${row['Guideline Name']} ${row['Parameter']} from ${row['Region']}: Status is ${row['Status']}`)
      continue
    }

    row['Sample Fraction'].split(',').map(v => v.trim()).sort().forEach(sampleFraction => {
      count += 1
      let regions = row['Region'].split(',').map(v => v.trim()).sort()

      const key = `${row['Characteristic Name']} ${row['Method Speciation']} (${sampleFraction})`

      let obj = json[key]
      const [multiplier, unit] = normalize.characteristic(row['Characteristic Name'], 1, row['Unit'])
      if (!obj) {
        obj = {
          characteristic: row['Characteristic Name'] || '',
          method_speciation: row['Method Speciation'] || '',
          sample_fraction: sampleFraction || '',
          unit: unit || '',
          guidelines: {},
          type: []
        }
      }

      const [type, guideline] = parseGuideline(row, multiplier)
      if (!obj.type.includes(type)) obj.type.push(type)
      if (type === 'formula') {
        formulaNames.push(guideline)
      }

      for (const region of regions) {
        updateObjProp(obj.guidelines, `${row['Media Name']}.${row['Freshwater or Marine']}.${region}.src`, `${row['Guideline Publisher']} ${row['Guideline Name']} ${(row['Status'] !== 'Approved') ? row['Status'] : ''}`.replace(/\s+/g, ' ').trim())
        updateObjProp(obj.guidelines, `${row['Media Name']}.${row['Freshwater or Marine']}.${region}.${row['Guideline Type']}`, guideline)
      }

      json[key] = obj
    })

  }

  let arr = Object.values(json).sort((a, b) => {
    return `${a.characteristic} ${a.method_speciation} (${a.sample_fraction})`
      < `${b.characteristic} ${b.method_speciation} (${b.sample_fraction})`
  })

  code += `
module.exports = {
  ${formulaNames.join(',\n  ')}
}
`
  html += `</body></html>`

  console.log('count', count, '=>', arr.length)

  fs.writeFileSync(__dirname + '/../metadata.json', JSON.stringify(arr, null, 2))
  fs.writeFileSync(__dirname + '/../formula.js', code)

  Promise.all(htmlPromises).then(() => {
    fs.writeFileSync(__dirname + '/../public/preview.html', html)

    console.log('Done!')
    process.exit(0)
  })


  console.log(buildCode('tst','if (0 ≤ hardness < 25) \\{ {e^{1.0166[ln(hardness)]-3.924} \\over 1000} \\} else if (25 ≤ hardness) \\{ ({e^{1.0166[ln(hardness)]-3.924} \\over 1000})(1.136672-0.041838[ln(hardness)]) \\}'), 1000)
})

// const run = async() => {
//   const f = 'if (0 ≤ hardness ≤ 48.5) \\{ 0.017 \\} else if (48.5 < hardness ≤ 97) \\{ 0.032 \\} else if (97 < hardness ≤ 194) \\{ 0.058 \\} else \\{ 0.1 \\}'
//   await buildHtml('', f)
// }
//
// run()
