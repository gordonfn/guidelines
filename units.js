// Used by guidelines and import
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
  if (!unit || unit === 'None') return ''
  return unit
    .replace(' ', '') // units are not allowed to have a space
    .replace(/µ(g|L|mol|S|W)/, 'u$1')
    .replace(/\/(|\d+)(|c|m|µ|n|p)l/, '/$1$2L')
    .replace('°', 'deg')
    .replace(/(ft|in|yd|m)²/, '$12')
    .replace(/(ft|in|yd|m)³/, '$13')
    .replace(/(.*)⁻¹/, '1/$1')
    .replace(/(.*)-1/, '1/$1')
    .replace('H₂O', 'H2O')
    .replace('-', '*')  // ie L/mg-cm
}

const prettify = unit => {
  if (!unit || unit === 'None') return ''
  if (unit === 'l') return 'L'
  return unit
    .replace(' ', '') // units are not allowed to have a space
    .replace(/u(g|L|mol|S|W)/, 'µ$1')
    .replace(/\/(|\d+)(|c|m|µ|n|p)l/, '/$1$2L')
    .replace('deg', '°')
    .replace(/(ft|in|yd|m)2/, '$1²')
    .replace(/(ft|in|yd|m)3/, '$1³')
    .replace(/1\/(.*)/, '$1⁻¹')
    .replace(/H2O/, 'H₂O')
    .replace('None', '')

    .replace('*', '-')
}

module.exports = { convert, prettify, uglify }
