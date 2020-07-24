const expect = require('chai').expect
const guidelines = require('../index')

describe('Guidelines', function () {
  describe('filterMetadata', function () {
    it('Should get all static metadata', function (done) {
      expect(guidelines.filterMetadata({
        type:['value','range']
      }).length).to.equal(416)

      done()
    })

    it('Should get all formula metadata', function (done) {
      expect(guidelines.filterMetadata({
        type:['formula']
      }).length).to.equal(36)
      done()
    })

    it('Should one specific metadata', function (done) {
      expect(guidelines.filterMetadata({
        'characteristic': 'Aluminum',
        'method_speciation': '',
        'sample_fraction': 'Total',
      }).length).to.equal(1)

      expect(guidelines.filterMetadata({
        'characteristic': 'Cadmium',
        'method_speciation': '',
        'sample_fraction': 'Total',
      }).length).to.equal(1)

      done()
    })

  })

})
