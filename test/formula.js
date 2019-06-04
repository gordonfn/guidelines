const expect = require('chai').expect
const formula = require('../formula.js')

describe('Guideline Formulas', function () {

  describe('CA: CCME', function () {
    it('Should calculate Aluminum (Chronic)', function (done) {
      expect(formula.aluminumChronicCA({
        pH: 1
      })).to.equal(5)

      expect(formula.aluminumChronicCA({
        pH: 6.5
      })).to.equal(100)

      done()
    })

    it('Should calculate Cadmium (Acute)', function (done) {
      expect(formula.cadmiumAcuteCA({
        CaCO3: 5
      })).to.equal(0.11)

      expect(formula.cadmiumAcuteCA({
        CaCO3: 100
      }).toFixed(16)).to.equal((2.0989398836235242).toFixed(16))

      expect(formula.cadmiumAcuteCA({
        CaCO3: 361
      })).to.equal(7.7)

      done()
    })
  })

  describe('US: US EPA', function () {


  })

})
