const fs = require('fs')
const parse = require('csv-parse')

const json = {}
const db = []
const data = fs.readFileSync(__dirname + '/../lib/Guidelines.csv')
parse(data, {
  columns: true
}, (err, output) => {
  output.forEach((row) => {
    if (!row['Characteristic Name']) {
      console.log(`skip '${row['Guideline Name']}' from ${row['Region']}`)
      return
    }
    const key = `${row['Characteristic Name']} ${row['Method Speciation']} (${row['Sample Fraction']})`

    if (row['Unit'] === 'mg/L') {
      if (row['Acute'] !== '-' && row['Type'] === 'value') row['Acute'] = Number.parseFloat(row['Acute'])*1000
      if (row['Chronic'] !== '-' && row['Type'] === 'value') row['Chronic'] = Number.parseFloat(row['Chronic'])*1000
      row['Unit'] = 'µg/L'
    }

    const obj = json[key] || {type:''}
    obj.name = row['Short Name'] || row['Characteristic Name'] || ''
    obj.characteristic_name = row['Characteristic Name'] || ''
    obj.method_speciation = row['Method Speciation'] || ''
    obj.sample_fraction = row['Sample Fraction'] || ''
    obj.unit = row['Unit'] || ''

    const types = ['','value', 'range', 'formula']
    obj.type = types.indexOf(obj.type) < types.indexOf(row['Type']) ? obj.type = row['Type'] : obj.type

    if (!obj.guidelines) obj.guidelines = {}
    if (row['Acute'] !== '-') {
      if (row['Type'] === 'value') obj.guidelines[`${row['Region']}_acute`] = Number.parseFloat(row['Acute'])
      if (row['Type'] === 'range') obj.guidelines[`${row['Region']}_acute`] = row['Acute'].split('-').map(v => Number.parseFloat(v))
      if (row['Type'] === 'formula') obj.guidelines[`${row['Region']}_acute`] = row['Characteristic Name'].toLowerCase().replace(/[^a-z0-9]/, '') + 'Acute' + row['Region'].replace('-')
    } else {
      obj.guidelines[`${row['Region']}_acute`] = null
    }

    if (row['Chronic'] !== '-') {
      if (row['Type'] === 'value') obj.guidelines[`${row['Region']}_chronic`] = Number.parseFloat(row['Chronic'])
      if (row['Type'] === 'range') obj.guidelines[`${row['Region']}_chronic`] = row['Chronic'].split('-').map(v => Number.parseFloat(v))
      if (row['Type'] === 'formula') obj.guidelines[`${row['Region']}_chronic`] = row['Characteristic Name'].toLowerCase().replace(/[^a-z0-9]/, '') + 'Chronic' + row['Region'].replace('-')
    } else {
      obj.guidelines[`${row['Region']}_chronic`] = null
    }

    json[key] = obj
  })

  const arr = Object.values(json)

  fs.writeFileSync(__dirname + '/../metadata.json', JSON.stringify(arr, null, 2))

  console.log('Write SQL Table')
  let sql = `
CREATE SCHEMA IF NOT EXISTS datastream;
CREATE TABLE IF NOT EXISTS datastream.guidelines (
  characteristic_name    VARCHAR(118) NOT NULL,
  method_speciation      VARCHAR(9)   NOT NULL,
  sample_fraction        VARCHAR(25)  NOT NULL,
  values                 JSONB        NOT NULL
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
      if (type === 'formula') values[key] = true
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
