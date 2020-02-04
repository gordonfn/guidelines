const { create, all } = require('mathjs')
const math = create(all)
math.config({
  number: 'BigNumber',
  precision: 64        // Number of significant digits for BigNumbers
})
// Docs: https://mathjs.org/docs/reference/functions.html

math.isValid = (value) => {
  return Number(value) === value && Number.isFinite(value)
}

module.exports = math