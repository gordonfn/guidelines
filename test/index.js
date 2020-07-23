const expect = require('chai').expect
const guidelines = require('../index')

describe('Guidelines', function () {
  describe('filterMetadata', function () {
    it('Should get all static metadata', function (done) {
      expect(guidelines.filterMetadata({
        type:['value','range']
      }).length).to.equal(539)

      done()
    })

    it('Should get all formula metadata', function (done) {
      expect(guidelines.filterMetadata({
        type:['formula']
      }).length).to.equal(18)
      done()
    })

    it('Should one specific metadata', function (done) {
      expect(guidelines.filterMetadata({
        'characteristic_name': 'Aluminum',
        'method_speciation': '',
        'sample_fraction': 'Total',
      }).length).to.equal(1)

      expect(guidelines.filterMetadata({
        'characteristic_name': 'Cadmium',
        'method_speciation': '',
        'sample_fraction': 'Total',
      }).length).to.equal(1)

      done()
    })

  })

})
