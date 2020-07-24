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
      //console.log(`skip '${formula}' formula missing`)
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

      if (!obj.guidelines) obj.guidelines = {}

      let types = []
      let guidelines = {}
      ;[types[0], guidelines.Freshwater_acute] = parseGuideline('Freshwater Acute', row)
      ;[types[1], guidelines.Freshwater_chronic] = parseGuideline('Freshwater Chronic', row)
      ;[types[2], guidelines.Marine_acute] = parseGuideline('Marine Acute', row)
      ;[types[3], guidelines.Marine_chronic] = parseGuideline('Marine Chronic', row)
      ;[types[4], guidelines.Sediment_acute] = parseGuideline('Sediment Acute', row)
      ;[types[5], guidelines.Sediment_chronic] = parseGuideline('Sediment Chronic', row)
      obj.type = [...new Set(types.sort())].filter(v => v != null)

      guidelines = clean(guidelines)

      for (const region of regions) {
        for (const key of Object.keys(guidelines)) {
          const [media, type] = key.split('_')
          updateObjProp(obj.guidelines, `${media}.${region}.src`, row['Guideline Publisher'])
          updateObjProp(obj.guidelines, `${media}.${region}.${type}`, guidelines[key])
        }
      }

      // test unit normalizations integrity
      //if (regions.includes('CA') || regions.includes('US')) {
        const [measure, unit] = normalize.characteristic(obj.characteristic, 1, obj.unit)
      obj.unit = unit
        if (measure !== 1) {
          //console.log(obj.unit)//, ',', obj.unit, regions[0], regions[regions.length-1])
          console.log('**',obj.characteristic, regions[0], regions[regions.length-1], obj.type, obj.unit, '=>', unit, '(normalized)')
        }
      //}

      json[key] = obj
    })

  }

  let arr = Object.values(json).sort((a, b) => {
    return `${a.characteristic} ${a.method_speciation} (${a.sample_fraction})`
      < `${b.characteristic} ${b.method_speciation} (${b.sample_fraction})`
  })

  console.log('count', count, '=>', arr.length)

  fs.writeFileSync(__dirname + '/../metadata.json', JSON.stringify(arr, null, 2))

  /*console.log('Write SQL Table')
  let sql = `
CREATE SCHEMA IF NOT EXISTS datastream;
CREATE TABLE IF NOT EXISTS datastream.guidelines (
  characteristic_name    VARCHAR(${varchar.characteristic_name}) NOT NULL DEFAULT '',
  method_speciation      VARCHAR(${varchar.method_speciation})  NOT NULL DEFAULT '',
  sample_fraction        VARCHAR(${varchar.sample_fraction})  NOT NULL DEFAULT '',
  unit                   VARCHAR(${varchar.unit})   NOT NULL DEFAULT '',
  values                 JSONB        NOT NULL DEFAULT '{}'
);

CREATE UNIQUE INDEX IF NOT EXISTS guidelines_pkey
    ON datastream.guidelines (
       characteristic_name,
       method_speciation,
       sample_fraction
    );

CREATE INDEX IF NOT EXISTS guideline_characteristic_name_idx
  ON datastream.guidelines (characteristic_name);
CREATE INDEX IF NOT EXISTS guideline_method_speciation_idx
  ON datastream.guidelines (method_speciation);
CREATE INDEX IF NOT EXISTS guideline_sample_fraction_idx
  ON datastream.guidelines (sample_fraction);

`
  arr.forEach(char => {
    const { name, characteristic_name, method_speciation, sample_fraction, unit, type, guidelines } = char
    const values = {}
    Object.keys(guidelines).forEach(key => {
      const value = guidelines[key]
      if (value === null) return
      if (typeof value === 'string') values[key] = true
      else values[key] = value
    })
    //db.push({name, characteristic_name, method_speciation, sample_fraction, values})
    sql += `INSERT INTO datastream.guidelines (characteristic_name, method_speciation, sample_fraction, unit, values)
VALUES ('${characteristic_name.replace('\'', '\'\'')}', '${method_speciation}', '${sample_fraction}', '${unit}', '${JSON.stringify(values)}')
ON CONFLICT (characteristic_name, method_speciation, sample_fraction) DO NOTHING;\n`
  })

  fs.writeFileSync(__dirname + '/../guidelines.sql', sql)
*/
  console.log('Done!')
  process.exit(0)
})
