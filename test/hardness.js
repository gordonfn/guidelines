const expect = require('chai').expect
const calculateHardness = require('../hardness.js')
const formula = require('../formula.js')

describe('Hardness', function () {

  it('Should not calculate', function (done) {
    expect(calculateHardness({})).to.equal(null)

    expect(calculateHardness({
      Ca: 0.1,
      CaIon: 1,
      CH: 2,
    })).to.equal(null)

    expect(calculateHardness({
      TH: '1'
    })).to.equal(null)

    expect(calculateHardness({
      TH: Infinity
    })).to.equal(null)

    expect(calculateHardness({
      TH: null
    })).to.equal(null)

    done()
  })

  it('Should calculate from `Total Hardness` (TH)', function (done) {
    expect(calculateHardness({
      TH: 1
    })).to.equal(1)

    expect(calculateHardness({
      TH: 2
    })).to.equal(2)

    done()
  })

  it('Should calculate from `Hardness, Ca, Mg` (CaCO3)', function (done) {
    expect(calculateHardness({
      CaCO3: 2
    })).to.equal(2)

    expect(calculateHardness({
      CaCO3: 3
    })).to.equal(3)

    done()
  })

  it('Should calculate from `Hardness, Calcium` (Ca) & `Hardness, magnesium` (Mg)', function (done) {
    expect(calculateHardness({
      Ca: 0.1,
      Mg: 0.2
    })).to.equal(0.3)

    expect(calculateHardness({
      Ca: 1,
      Mg: 2
    })).to.equal(3)

    expect(calculateHardness({
      Ca: 2,
      Mg: 3
    })).to.equal(5)

    done()
  })

  it('Should calculate from `Calcium` (CaIon) & `Magnesium` (MgIon)', function (done) {
    expect(calculateHardness({
      CaIon: 1,
      MgIon: 1
    })).to.equal(6.615)

    expect(calculateHardness({
      CaIon: 2,
      MgIon: 2
    })).to.equal(13.23)

    done()
  })

  it('Should calculate from `Hardness, carbonate` (CH) & `Hardness, non-carbonate` (NCH)', function (done) {
    expect(calculateHardness({
      CH: 2,
      NCH: 3
    })).to.equal(5)

    expect(calculateHardness({
      CH: 3,
      NCH: 4
    })).to.equal(7)

    done()
  })

  it('Should apply calculate in proper order', function (done) {
    expect(calculateHardness({
      TH: 1,
      CaCO3: 2,
      Ca: 1,
      Mg: 2,
      CaIon: 1,
      MgIon: 1,
      CH: 2,
      NCH: 3
    })).to.equal(1)

    expect(calculateHardness({
      CaCO3: 2,
      Ca: 1,
      Mg: 2,
      CaIon: 1,
      MgIon: 1,
      CH: 2,
      NCH: 3
    })).to.equal(2)

    expect(calculateHardness({
      Ca: 1,
      Mg: 2,
      CaIon: 1,
      MgIon: 1,
      CH: 2,
      NCH: 3
    })).to.equal(3)

    expect(calculateHardness({
      CaIon: 1,
      MgIon: 1,
      CH: 2,
      NCH: 3
    })).to.equal(6.615)

    expect(calculateHardness({
      CH: 2,
      NCH: 3
    })).to.equal(5)

    expect(calculateHardness({})).to.equal(null)

    done()
  })

})
