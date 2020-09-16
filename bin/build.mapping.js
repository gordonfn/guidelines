const fs = require('fs')
const parse = require('csv-parse')
const normalize = require('../../datastream-import/import/calc/normalize')  // for unit testing

const params = Object.keys(require('../formula_params.json'))
params.push('hardness')
const hardnessParams = ['TH', 'CaCO3', 'CH', 'NCH', 'Ca', 'Mg', 'CaIon', 'MgIon', 'hardness']

const json = {}
let formulaCode = ''

updateObjProp = (obj, propPath, value) => {
  const [head, ...rest] = propPath.split('.')

  if (rest.length && !obj[head]) obj[head] = {}

  !rest.length
    ? obj[head] = value
    : updateObjProp(obj[head], rest.join('.'), value)
}

const buildCode = (name, formula) => {
  //console.log('|>', formula)
  formula = formula
    // math formulas
    .replace(/log_(\d+)\(([^\{\}]*?)\)/g, 'log($2, $1)')
    .replace(/ln\(([^\{\}]*?)\)/g, 'log($1, e)')
    .replace(/e\^\{([^\{\}]*?)\}/g, 'exp($1)')
    .replace(/10\^\{([^\{\}]*?)\}/g, 'pow(10, $1)')
    .replace(/\{([^\{\}]*?) \\over ([^\{\}]*?)\}/g, '($1/$2)')
    .replace(/\{([^\{\}]*?) \\over ([^\{\}]*?)\}/g, '($1/$2)')  // Allow for nested
    // excess brackets
    .replace(/\[(.*?)\]/g, '($1)')
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

  const fallbackMatch = formula.match(/else \{\sreturn ([\d\.]+)\s\}$/) // TODO confirm w/ Mary
  const fallback = fallbackMatch ? fallbackMatch[1] : 'null'

  // TODO need to add in catch for !math.isValid(hardness) || hardness <= 0
  formula = `
const ${name} = (params) => {
  ${hardness.length ? `const hardness = calculateHardness(params)` : ``}
  ${variables.length ? `const { ${variables.join(', ')} } = params` : ''}
  ${variables.length ? `if ( !math.isValid(${variables.join(') || !math.isValid(')}) ) { return ${fallback} }` : ''}
  ${formula}
  ${(formula.indexOf('return') !== 0 && !formula.includes('else {')) ? `return null` : ''}
}
`
  formulaCode += formula.replace(/\n\s*\n/g, '\n')
  return formula
}

const parseGuideline = (row) => {
  let value = row['Value']

  // Value
  if (value.toString() === Number.parseFloat(value).toString()) {
    return ['value', normalize.characteristic(row['Characteristic Name'], Number.parseFloat(value), row['Unit'])[0]]
  }
  // Range
  if (value.match(/^[\d.]+-[\d.]+$/)) return ['range', value.split('-').map(v => Number.parseFloat(v))]

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

    buildCode(formulaName, value)

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
  formulaCode = `
/* This page is generated during the build process. */
const math = require('./math')
const calculateHardness = require('./hardness')
`

  for (const row of output) {
    if (!row['Characteristic Name']) {
      console.log(`skip ${row['Guideline Publisher']} ${row['Guideline Name']} ${row['Parameter']} from ${row['Region']}: Characteristic Name missing`)
      continue
    }
    if (!row['Value']) {
      console.log(`skip ${row['Guideline Publisher']} ${row['Guideline Name']} ${row['Parameter']} from ${row['Region']}: Value missing`)
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
      if (!obj) {
        const [, unit] = normalize.characteristic(obj.characteristic, 1, row['Unit'])
        obj = {
          characteristic: row['Characteristic Name'] || '',
          method_speciation: row['Method Speciation'] || '',
          sample_fraction: sampleFraction || '',
          unit: unit || '',  // TODO normalize unit
          guidelines: {},
          type: []
        }
      }

      const [type, guideline] = parseGuideline(row)
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

  formulaCode += `
module.exports = {
  calculateHardness,
  ${formulaNames.join(',\n  ')}
}
`

  console.log('count', count, '=>', arr.length)

  fs.writeFileSync(__dirname + '/../metadata.json', JSON.stringify(arr, null, 2))
  fs.writeFileSync(__dirname + '/../formula.js', formulaCode)

  console.log('Done!')

  // test

  console.log(buildCode('test', 'if (hardness < 25) \\{ {e^{1.273[ln(hardness)]-4.705} \\over 1000} \\} else \\{ (1.46203-0.145712[ln(hardness)]) {e^{1.273[ln(hardness)]-4.705} \\over 1000} \\}'))

  process.exit(0)
})
