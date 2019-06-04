const math = require('mathjs')
math.config({
  number: 'BigNumber',
  precision: 64        // Number of significant digits for BigNumbers
})
// Docs: https://mathjs.org/docs/reference/functions.html

const convert = (value, unit, endUnit) => {
  if (!value || !unit || !endUnit || unit === 'None') return value

  // sanitize
  unit = unit.replace('µ', 'u')
  endUnit = endUnit.replace('µ', 'u')

  return math.unit(`${value} ${unit}`).toNumber(endUnit)
}

module.exports = convert
