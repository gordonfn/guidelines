const fs = require('fs')
const parse = require('csv-parse')
const { characteristic } = require('@gordonfn/normalize/lib/measure')
const { build } = require('./formulaParser')

// Metadata
const json = {}

const updateObjProp = (obj, propPath, value) => {
  const [head, ...rest] = propPath.split('.')

  if (rest.length && !obj[head]) obj[head] = {}

  !rest.length
    ? (obj[head] = value)
    : updateObjProp(obj[head], rest.join('.'), value)
}

// HTML Preview
const htmlPromises = []
let html = '<html><head></head><body><!-- This page is generated during the build process. -->'
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

const buildHtml = async (name, formula) => {
  const MathJax = await mathjax
  const svg = MathJax.tex2svg(formula, { display: true })
  // const chtml = MathJax.tex2chtml(formula, {display: true});
  // console.log(MathJax.startup.adaptor.outerHTML(svg));
  // console.log(MathJax.startup.adaptor.outerHTML(chtml));
  html += `<br><br>${name}<br>${MathJax.startup.adaptor.outerHTML(svg)}`
}

const formulaNames = []
let codeFunctions = `
/* This page is generated during the build process. */
const math = require('@gordonfn/normalize/lib/math')
const calculateHardness = require('./hardness')
`
const codeFunctionsEnd = (functions) => `
module.exports = {
  ${functions.join(',\n  ')}
}
`

let codeTesting = `
/* This page is generated during the build process. */
/* global describe, it */
const expect = require('chai').expect
const formula = require('../lib/formula.js')

describe('Formulas', function () {
`
const codeTestingEnd = () => `
})
`

const parseGuideline = (row, multiplier = 1) => {
  const value = row.Value

  // Value
  if (value.toString() === Number.parseFloat(value).toString()) {
    return ['value', Number.parseFloat(value) * multiplier]
  }
  // Range
  if (value.match(/^\[[\d.]+,[\d.]+\]$/)) {
    return [
      'range',
      JSON.parse(value).map((v) => v * multiplier)
    ]
  }

  // Formula
  if (value.length) {
    const region = row.Region.split(',')
      .map((v) => v.trim())[0]
      .replace('-', '')
    const sampleFraction = row['Sample Fraction']
      .split(',')
      .map((v) => v.trim())[0]
      .replace('-', '')

    const formulaName =
      row['Media Name'].replace(' ', '').toLowerCase() +
      row.Ecosystem.replace(' ', '') +
      row['Protection Level'].replace(/[^a-zA-Z0-9]/g, '') +
      row['Characteristic Name'].replace(/[^a-zA-Z0-9]/g, '') +
      row['Method Speciation'].replace('as', 'As').replace(' ', '') +
      sampleFraction +
      row.Status.replace(' ', '') +
      region

    if (!formulaNames.includes(formulaName)) {
      formulaNames.push(formulaName)
      const { code, test } = build(formulaName, value, multiplier)
      codeFunctions += code
      codeTesting += !test
        ? ''
        : `
  describe('${formulaName}', function () {
  ${test}
  })
      `

      htmlPromises.push(buildHtml(formulaName, value)) // ugly hack
    }

    return ['formula', formulaName]
  }
  return [null, null]
}

const data = fs.readFileSync(__dirname + '/guidelines.csv')
parse(
  data,
  {
    columns: true
  },
  (err, output) => {
    let count = 0

    for (const row of output) {
      if (!row['Characteristic Name']) {
        console.log(
          `skip ${row.Publisher} ${row.Parameter} from ${row.Region}: Characteristic Name missing`
        )
        continue
      }
      if (!row.Value) {
        console.log(
          `skip ${row.Publisher} ${row.Parameter} from ${row.Region}: Value missing ***`
        )
        continue
      }
      if (['Historical'].includes(row.Status)) {
        console.log(
          `skip ${row.Publisher} ${row.Parameter} from ${row.Region}: Status is ${row.Status}`
        )
        continue
      }

      row['Sample Fraction']
        .split(',')
        .map((v) => v.trim())
        .sort()
        .forEach((sampleFraction, idx) => {
          count += 1
          const regions = row.Region.split(',')
            .map((v) => v.trim())
            .sort()

          const key = `${row['Characteristic Name']} ${row['Method Speciation']} (${sampleFraction})`

          let obj = json[key]
          const [multiplier, unit] = characteristic(
            row['Characteristic Name'],
            1,
            row.Unit
          )
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

          for (const region of regions) {
            updateObjProp(
              obj.guidelines,
              `${row['Media Name']}.${row.Ecosystem}.${region}.metadata`,
              {
                publisher: row.Publisher,
                status: row.Status,
              }
            )
            updateObjProp(
              obj.guidelines,
              `${row['Media Name']}.${row.Ecosystem}.${region}.${row['Protection Level']}`,
              guideline
            )
          }

          json[key] = obj
        })
    }

    const arr = Object.values(json).sort((a, b) => {
      return (
        `${a.characteristic} ${a.method_speciation} (${a.sample_fraction})` <
        `${b.characteristic} ${b.method_speciation} (${b.sample_fraction})`
      )
    })

    codeFunctions += codeFunctionsEnd(formulaNames)
    codeTesting += codeTestingEnd()

    html += '</body></html>'

    console.log('count', count, '=>', arr.length)

    fs.writeFileSync(
      __dirname + '/../lib/metadata.json',
      JSON.stringify(arr, null, 2)
    )
    fs.writeFileSync(__dirname + '/../lib/formula.js', codeFunctions)
    fs.writeFileSync(__dirname + '/../test/formula.js', codeTesting)

    Promise.all(htmlPromises).then(() => {
      fs.writeFileSync(__dirname + '/../test/formula.html', html)

      console.log('Done!')
      process.exit(0)
    })
  }
)
