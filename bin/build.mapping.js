const fs = require('fs')
const parse = require('csv-parse')
const formulas = require('../formula')
const normalize = require('../../datastream-import/import/calc/normalize')  // for unit testing
const json = {}

updateObjProp = (obj, propPath, value) => {
  const [head, ...rest] = propPath.split('.')

  if (rest.length && !obj[head]) obj[head] = {}

  !rest.length
    ? obj[head] = value
    : updateObjProp(obj[head], rest.join('.'), value)
}

function clean (obj) {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    } else if (typeof obj[propName] === 'object') {
      obj[propName] = clean(obj[propName])
    }
  }
  return obj
}

const parseGuideline = (col, row) => {
  if (row[col] === 'NRG' || row[col] === '') return [null, null]

  const [media, type] = col.split(' ')

  // Value
  if (row[col].toString() === Number.parseFloat(row[col]).toString()) {
    return ['value', normalize.characteristic(row['Characteristic Name'], Number.parseFloat(row[col]), row['Unit'])[0]]
  }
  // Range
  if (row[col].match(/^[\d.]+-[\d.]+$/)) return ['range', row[col].split('-').map(v => Number.parseFloat(v))]
  // Formula
  if (row[col].length) {
    const region = row['Region'].split(',').map(v => v.trim())[0].replace('-', '')
    const formula =
      media.toLowerCase() + '_'
      + row['Characteristic Name'].replace(/[^a-zA-Z0-9]/g, '') + '_'
      + row['Method Speciation'].replace(' ', '') + '_'
      + row['Sample Fraction'].replace(' ', '') + '_'
      + region + '_'
      + type
    if (Object.keys(formulas).indexOf(formula) === -1) {
      console.log(`skip '${formula}' formula missing`)
      return [null, null]
    }
    //console.log(formula, ',')
    return ['formula', formula]
  }
  return [null, null]
}

const data = fs.readFileSync(__dirname + '/../lib/Guidelines.csv')
parse(data, {
  columns: true
}, (err, output) => {
  let count = 0

  for (const row of output) {
    if (!row['Characteristic Name']) {
      //console.log(`skip '${row['Guideline Name']}' from ${row['Region']}`)
      continue
    }

    row['Sample Fraction'].split(',').map(v => v.trim()).sort().forEach(sampleFraction => {
      count += 1
      let regions = row['Region'].split(',').map(v => v.trim()).sort()

      const key = `${row['Characteristic Name']} ${row['Method Speciation']} (${sampleFraction})`

      const obj = json[key] || {}
      obj.characteristic = row['Characteristic Name'] || ''
      obj.method_speciation = row['Method Speciation'] || ''
      obj.sample_fraction = sampleFraction || ''
      obj.unit = row['Unit'] || ''

      if (!obj.guidelines) obj.guidelines = {}

      let types = []
      let guidelines = {}
      ;[types[0], guidelines.Freshwater_acute] = parseGuideline('Freshwater Acute', row)
      ;[types[1], guidelines.Freshwater_chronic] = parseGuideline('Freshwater Chronic', row)
      ;[types[2], guidelines.Marine_acute] = parseGuideline('Marine Acute', row)
      ;[types[3], guidelines.Marine_chronic] = parseGuideline('Marine Chronic', row)
      ;[types[4], guidelines.Sediment_acute] = parseGuideline('Sediment Acute', row)
      ;[types[5], guidelines.Sediment_chronic] = parseGuideline('Sediment Chronic', row)
      if (json[key] && json[key].type) types = types.concat(json[key].type) // add in previous
      obj.type = [...new Set(types.sort())].filter(v => v != null)

      guidelines = clean(guidelines)

      for (const region of regions) {
        for (const key of Object.keys(guidelines)) {
          const [media, type] = key.split('_')
          updateObjProp(obj.guidelines, `${media}.${region}.src`, row['Guideline Publisher'])
          updateObjProp(obj.guidelines, `${media}.${region}.${type}`, guidelines[key])
        }
      }

      // get normalized unit
      const [, unit] = normalize.characteristic(obj.characteristic, 1, obj.unit)
      obj.unit = unit

      json[key] = obj
    })

  }

  let arr = Object.values(json).sort((a, b) => {
    return `${a.characteristic} ${a.method_speciation} (${a.sample_fraction})`
      < `${b.characteristic} ${b.method_speciation} (${b.sample_fraction})`
  })

  console.log('count', count, '=>', arr.length)

  fs.writeFileSync(__dirname + '/../metadata.json', JSON.stringify(arr, null, 2))

  console.log('Done!')
  process.exit(0)
})
