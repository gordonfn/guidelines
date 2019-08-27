const fs = require('fs')
const parse = require('csv-parse')
const formulas = require('../formula')
const json = {}
const db = []

const parseGuideline = (col, row) => {
  if (row[col] !== '-') {
    if (row['Type'] === 'value' || row[col].toString() === Number.parseFloat(row[col]).toString())
      return Number.parseFloat(row[col])
    if (row['Type'] === 'range') return row[col].split('-').map(v => Number.parseFloat(v))
    if (row['Type'] === 'formula') {
      const formula = row['Characteristic Name'].toLowerCase().replace(/[^a-z0-9]/g, '')
        + row['Sample Fraction'].replace(' ', '')
        + col.replace(' ', '')
        + row['Region'].replace('-', '')
      if (Object.keys(formulas).indexOf(formula) === -1) console.log(`Missing: ${formula}()`)
      return formula
    }
  }
  return null
}

const data = fs.readFileSync(__dirname + '/../lib/Guidelines.csv')
parse(data, {
  columns: true
}, (err, output) => {
  let count = 0
  output.forEach((row) => {
    row['Characteristic Name'] = row['DataStream Characteristic Name']
    if (!row['Characteristic Name']) {
      console.log(`skip '${row['Guideline Name']}' from ${row['Region']}`)
      return
    }

    row['Sample Fraction'].split(',').map(v => v.trim()).forEach(sampleFraction => {
      count += 1
      const key = `${row['Characteristic Name']} ${row['Method Speciation']} (${sampleFraction})`

      const obj = json[key] || {type:''}
      //obj.name = row['Short Name'] || row['Characteristic Name'] || ''
      obj.characteristic_name = row['Characteristic Name'] || ''
      obj.method_speciation = row['Method Speciation'] || ''
      obj.sample_fraction = sampleFraction || ''
      obj.unit = row['Unit'] || ''

      const types = ['','value', 'range', 'formula']
      obj.type = types.indexOf(obj.type) < types.indexOf(row['Type']) ? obj.type = row['Type'] : obj.type

      if (!obj.guidelines) obj.guidelines = {}
      obj.guidelines[`${row['Region']}_freshwater_acute`] = parseGuideline('Freshwater Acute', row)
      obj.guidelines[`${row['Region']}_freshwater_chronic`] = parseGuideline('Freshwater Chronic', row)
      obj.guidelines[`${row['Region']}_marine_acute`] = parseGuideline('Marine Acute', row)
      obj.guidelines[`${row['Region']}_marine_chronic`] = parseGuideline('Marine Chronic', row)

      // clean nulls
      Object.keys(obj.guidelines).forEach((key) => (obj.guidelines[key] === null) && delete obj.guidelines[key])

      json[key] = obj
    })

  })

  let arr = Object.values(json).sort((a,b) => {
    return `${a.characteristic_name} ${a.method_speciation} (${a.sample_fraction})` < `${b.characteristic_name} ${b.method_speciation} (${b.sample_fraction})`
  })

  console.log('count', count, '=>', arr.length)

  fs.writeFileSync(__dirname + '/../metadata.json', JSON.stringify(arr, null, 2))

  console.log('Write SQL Table')
  let sql = `
CREATE SCHEMA IF NOT EXISTS datastream;
CREATE TABLE IF NOT EXISTS datastream.guidelines (
  characteristic_name    VARCHAR(118) NOT NULL DEFAULT '',
  method_speciation      VARCHAR(10)   NOT NULL DEFAULT '',
  sample_fraction        VARCHAR(25)  NOT NULL DEFAULT '',
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
    const {name,characteristic_name, method_speciation, sample_fraction, type, guidelines} = char
    const values = {}
    Object.keys(guidelines).forEach(key => {
      const value = guidelines[key]
      if (value === null) return
      if (typeof value === 'string') values[key] = true
      else values[key] = value
    })
    //db.push({name, characteristic_name, method_speciation, sample_fraction, values})
    sql += `INSERT INTO datastream.guidelines (characteristic_name, method_speciation, sample_fraction, values)
VALUES ('${characteristic_name.replace("'", "''")}', '${method_speciation}', '${sample_fraction}', '${JSON.stringify(values)}')
ON CONFLICT (characteristic_name, method_speciation, sample_fraction) DO NOTHING;\n`
  })

  fs.writeFileSync(__dirname + '/../guidelines.sql', sql)

  console.log('Done!')
  process.exit(0)
})
