const math = require('mathjs')

// Nephelometric turbidity unit
math.createUnit('NTU', '1 mg/l')
// Jackson Turbidity Unit
math.createUnit('JTU', '1 mg/l')
// Part-per Million
math.createUnit('ppm', '1 mg/l')

// Docs: https://mathjs.org/docs/reference/functions.html

const convert = (value, unit, endUnit) => {
  if (!value || !unit || !endUnit || unit === 'None') return value

  // sanitize
  unit = unit.replace(' ', '')
    .replace('µ', 'u')
    .replace('°', 'deg')
  endUnit = endUnit
    .replace(' ', '')
    .replace('µ', 'u')
    .replace('°', 'deg')

  return math.unit(value, unit).toNumeric(endUnit)
}

module.exports = convert
