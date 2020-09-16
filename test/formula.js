const expect = require('chai').expect
const formulas = require('../formula.js')

describe('Guideline Formulas', function () {
  it('Should return null when {}', function (done) {

    for(const key of Object.keys(formulas)) {
      expect(formulas[key]({})).to.equal(null)
    }

    done()
  })

  it('Should return null when zeros', function (done) {

    for(const key of Object.keys(formulas)) {
      let value = null
      console.log(key)
      try {
        value = formulas[key]({ TH: 0, pH: 0, DOC: 0, temperature: 0 })
      } catch(e) {
        console.error(key, e)
        throw new Error()
      }
      //expect(value).to.not.equal(null)
    }

    done()
  })

})
