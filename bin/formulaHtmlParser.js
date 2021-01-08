const params = require('../lib/formula_params.json')
const {uglify, prettify} = require('@gordonfn/normalize/lib/unit')

const cleanUnit = (unit) => {
  return prettify(uglify(unit)).replace('µ', '\\mu ')
}
const build = (formulaName, formula, unit) => {
  // Replace var name with proper full name
  for (const param in params) {
    const variablePattern = new RegExp(
      `(?<![{a-zA-Z])(${param})([^}a-zA-Z]?)`,
      'g'
    )
    if (!formula.match(variablePattern)) continue

    formula = formula.replace(variablePattern, '%$1%$2')
  }
  for (const param in params) {
    const variablePattern = new RegExp(
      `%${param}%`,
      'g'
    )
    if (!formula.match(variablePattern)) continue

    const characteristic = params[param].characteristic.replace(' ', '\\;')
    const method_speciation = params[param].method_speciation !== '*' ? params[param].method_speciation : ''
    const sample_fraction = params[param].sample_fraction !== '*' ? params[param].sample_fraction : ''
    const unit = cleanUnit(params[param].unit)

    let paramName = characteristic
      + (method_speciation ? `\\;${method_speciation}` : '')
      + (sample_fraction ? `\\;${sample_fraction}` : '')
      + (unit ? `\\;(${unit})` : '')
    formula = formula.replace(variablePattern, `${paramName}`)
  }

  formula = formula.replace(/hardness/g, `Hardness\\;(${cleanUnit(params['TH'].unit)})`)

  if (!formula.includes('if')) return buildSvg(formulaName, `x\\;(${cleanUnit(unit)}) = ${formula}`)

  // Format to use traditional if/else format
  formula = formula.replace(/\\\{ (.*?) \\\}/g, '{\n$1\n}')

  // TODO fix unit encoding
  let formatted = `
\\begin{equation}
  x\\;(${cleanUnit(unit)}) =
  \\begin{cases}
`
  const lines = formula.split('\n')
  formatted += lines
    .map((line, idx) => {
      if (line.includes('if')) {
        const parts = line.match(/if \((.*)\)/)
        return `  ${lines[idx + 1]}, & \\text{if ${parts[1].replace(/\\;/g, ' ')}}`
      } else if (line.includes('else')) {
        return `  ${lines[idx + 1]}, & \\text{else}`
      }

      return false
    })
    .filter(line => line)
    .join('\\\\\n')
  formatted += `\\\\\n
  \\end{cases}
\\end{equation}`

//   formula = `\\begin{equation}
//     G=
//     \\begin{cases}
//       1, & \\text{if} x=1 \\\\
//          & \\text{\\phantom{if}} x=2 \\\\
//       2, & \\text{else}
//     \\end{cases}
// \\end{equation}`
  return buildSvg(formulaName, formatted) // ugly hack
}

// https://docs.mathjax.org/en/latest/options/accessibility.html
const mathjax = require('mathjax').init({
  loader: { load: ['input/tex', 'output/svg', 'output/chtml'] }
  /* options: {
    enableEnrichment: true,
    enrichSpeech: 'deep',
    a11y:{
      speech: true,
      braille: true,
      subtitles: true,
      speechRules: 'mathspeak-default',
    }
  } */
}) // need node 14 to support root await

const buildSvg = async (name, formula) => {
  const MathJax = await mathjax
  try {
    const svg = MathJax.tex2svg(formula, { display: true })
    // const chtml = MathJax.tex2chtml(formula, {display: true});
    // console.log(MathJax.startup.adaptor.outerHTML(svg));
    // console.log(MathJax.startup.adaptor.outerHTML(chtml));
    return `<br><br>${name}<br>${MathJax.startup.adaptor.outerHTML(svg)}`
  } catch (e) {
    console.error(e)
    return `<br><br>${name}<br>${e.message}`
  }
}

module.exports = { build }