const { create, all } = require('mathjs')
const math = create(all, {
  number: 'BigNumber'
})

// Docs: https://mathjs.org/docs/reference/functions.html

// Nephelometric turbidity unit
math.createUnit('NTU', '1 mg/l')
// Jackson Turbidity Unit
math.createUnit('JTU', '1 mg/l')
// Part-per Million
math.createUnit('ppm', '1 mg/l')

const convert = (value, unit, endUnit) => {
  if (typeof value === 'undefined') value = null
  if (!unit || value === null) return value

  unit = uglify(unit)

  if (unit === endUnit) return value

  try {
    return math.unit(`${value} ${unit}`).toNumber(endUnit)
  } catch (e) {
    console.error(`${value} ${unit} => ${endUnit}`, e.message)
    return value
  }
}

const uglify = unit => {
  if (unit === 'None') return ''
  return unit
    .replace(' ', '') // units are not allowed to have a space
    .replace(/µ(g|L|mol|S|W)/, 'u$1')
    .replace('°', 'deg')
    .replace(/(ft|in|yd|m)²/, '$12')
    .replace(/(ft|in|yd|m)³/, '$13')
    .replace('H₂O', 'H2O')
}

const prettify = unit => {
  return unit
    .replace(' ', '') // units are not allowed to have a space
    .replace(/u(g|L|mol|S|W)/, 'µ$1')
    .replace('deg', '°')
    .replace(/(ft|in|yd|m)2/, '$1²')
    .replace(/(ft|in|yd|m)3/, '$1³')
    .replace(/H2O/, 'H₂O')
    .replace('None', '')
}

module.exports = { convert, prettify, uglify }
