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
// MicroSiemens per Centimeter (Temp related)
// math.createUnit('uS/cm', '0.64 mg/l')
// Part-per Million
math.createUnit('ppm', '1 mg/l')
// Part-per Billion
math.createUnit('ppb', '1 ug/l')
// Part-per Trillion
math.createUnit('ppt', '1 ng/l')

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

// Convert to allow math.js conversion
const uglify = (unit) => {
  if (!unit || unit === 'None') return ''
  return (
    unit
      // .replace('CaCO₃', 'CaCO3')
      .replace('CaCO₃', '')
      .replace('CaCO3', '')

      .replace(' ', '') // units are not allowed to have a space
      .replace(/µ(g|l|L|mol|S|W)/, 'u$1')
      .replace(/\/(|\d+)(|c|m|µ|n|p)l/, '/$1$2L')
      .replace('°', 'deg')
      .replace(/(ft|in|yd|m)²/, '$12')
      .replace(/(ft|in|yd|m)³/, '$13')
      .replace(/(.*)⁻¹/, '1/$1')
      .replace(/(.*)-1/, '1/$1')
      .replace('H₂O', 'H2O')
      .replace('-', '*')
  ) // ie L/mg-cm
}

// cast `l` -> `L`
const prettify = (unit) => {
  if (!unit || unit === 'None') return ''
  if (unit === 'l') return 'L'
  if (['Joules', 'Granules', 'Imp gal', 'ADMI value'].includes(unit)) {
    return unit
  }

  return (
    unit
      // .replace(/CaCO3/g, 'CaCO₃')
      .replace(/CaCO3/g, '')

      .replace(/(?<!%)(?<!by)(?<!per) (?!DW)(?!ton)(?!Ca)(?!cnt)/g, '')
      .replace(/u(g|l|L|mol|S|W)/g, 'µ$1')
      .replace(/\/(|\d+)(|c|m|µ|n|p)l/g, '/$1$2L')
      .replace('deg', '°')
      .replace(/(ft|in|yd|m)2/g, '$1²')
      .replace(/(ft|in|yd|m)3/g, '$1³')
      .replace(/(.*)-1$/g, '$1⁻¹')
      .replace(/1\/(.*)/g, '$1⁻¹')
      .replace(/H2O/g, 'H₂O')
      .replace('None', '')

      .replace(/[-\*]/g, '·')
  )
}

module.exports = { convert, prettify, uglify }
