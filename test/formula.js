const expect = require('chai').expect
const formula = require('../formula.js')

describe('Guideline Formulas', function () {

  describe('CA: CCME', function () {
    it('Should calculate Aluminum Total (Freshwater Chronic)', function (done) {

      expect(formula.aluminumTotalFreshwaterChronicCA({})).to.equal(null)

      expect(formula.aluminumTotalFreshwaterChronicCA({
        pH: 1
      })).to.equal(5)

      expect(formula.aluminumTotalFreshwaterChronicCA({
        pH: 6.5
      })).to.equal(100)

      done()
    })

    it('Should calculate Cadmium Total (Freshwater Acute)', function (done) {
      expect(formula.cadmiumTotalFreshwaterAcuteCA({})).to.equal(null)

      expect(formula.cadmiumTotalFreshwaterAcuteCA({
        TH: 5
      })).to.equal(0.11)

      expect(formula.cadmiumTotalFreshwaterAcuteCA({
        TH: 100
      }).toFixed(15)).to.equal((2.0989398836235241).toFixed(15))

      expect(formula.cadmiumTotalFreshwaterAcuteCA({
        TH: 361
      })).to.equal(7.7)

      done()
    })

    it('Should calculate Cadmium Total (Freshwater Chronic)', function (done) {
      expect(formula.cadmiumTotalFreshwaterChronicCA({})).to.equal(null)

      expect(formula.cadmiumTotalFreshwaterChronicCA({
        TH: 10
      })).to.equal(0.04)

      expect(formula.cadmiumTotalFreshwaterChronicCA({
        TH: 100
      }).toFixed(15)).to.equal((0.158489319246111).toFixed(15))

      expect(formula.cadmiumTotalFreshwaterChronicCA({
        TH: 300
      })).to.equal(0.37)

      done()
    })

    it('Should calculate Copper Total (Freshwater Chronic)', function (done) {
      expect(formula.copperTotalFreshwaterChronicCA({})).to.equal(2)

      expect(formula.copperTotalFreshwaterChronicCA({
        TH: 10
      })).to.equal(2)

      expect(formula.copperTotalFreshwaterChronicCA({
        TH: 100
      }).toFixed(15)).to.equal((2.364768216641758).toFixed(15))

      expect(formula.copperTotalFreshwaterChronicCA({
        TH: 300
      })).to.equal(4)

      done()
    })

    it('Should calculate Lead Total (Freshwater Chronic)', function (done) {
      expect(formula.leadTotalFreshwaterChronicCA({})).to.equal(1)

      expect(formula.leadTotalFreshwaterChronicCA({
        TH: 10
      })).to.equal(1)

      expect(formula.leadTotalFreshwaterChronicCA({
        TH: 100
      }).toFixed(15)).to.equal((3.181591829189213).toFixed(15))

      expect(formula.leadTotalFreshwaterChronicCA({
        TH: 300
      })).to.equal(7)

      done()
    })

    it('Should calculate Nickel Total (Freshwater Chronic)', function (done) {
      expect(formula.nickelTotalFreshwaterChronicCA({})).to.equal(25)

      expect(formula.nickelTotalFreshwaterChronicCA({
        TH: 10
      })).to.equal(25)

      expect(formula.nickelTotalFreshwaterChronicCA({
        TH: 100
      }).toFixed(15)).to.equal((95.576726269111492).toFixed(15))

      expect(formula.nickelTotalFreshwaterChronicCA({
        TH: 300
      })).to.equal(150)

      done()
    })

    it('Should calculate Zinc Dissolved (Freshwater Acute)', function (done) {
      expect(formula.zincDissolvedFreshwaterAcuteCA({})).to.equal(null)
      expect(formula.zincDissolvedFreshwaterAcuteCA({TH:1})).to.equal(null)
      expect(formula.zincDissolvedFreshwaterAcuteCA({DOC:1})).to.equal(null)

      expect(formula.zincDissolvedFreshwaterAcuteCA({
        TH: 100,
        DOC: 1
      }).toFixed(15)).to.equal((99.694126642648090).toFixed(15))

      expect(formula.zincDissolvedFreshwaterAcuteCA({
        TH: 1,
        DOC: 1
      })).to.equal(37)

      done()
    })

    it('Should calculate Zinc Dissolved (Freshwater Chronic)', function (done) {
      expect(formula.zincDissolvedFreshwaterChronicCA({})).to.equal(null)
      expect(formula.zincDissolvedFreshwaterChronicCA({TH:1})).to.equal(null)
      expect(formula.zincDissolvedFreshwaterChronicCA({DOC:1})).to.equal(null)
      expect(formula.zincDissolvedFreshwaterChronicCA({pH:1})).to.equal(null)

      expect(formula.zincDissolvedFreshwaterChronicCA({
        TH: 0,
        DOC: 0,
        pH: 0
      })).to.equal(7)

      expect(formula.zincDissolvedFreshwaterChronicCA({
        TH: 100,
        DOC: 1,
        pH: 7
      }).toFixed(15)).to.equal((26.604920134101859).toFixed(15))

      expect(formula.zincDissolvedFreshwaterChronicCA({
        TH: 1,
        DOC: 1,
        pH: 1
      })).to.equal(7)

      done()
    })
  })



  describe('US: EPA', function () {
    it('Should calculate Ammonia (Freshwater Acute)', function (done) {
      expect(formula.ammoniaFreshwaterAcuteUS({})).to.equal(null)
      expect(formula.ammoniaFreshwaterAcuteUS({pH:1})).to.equal(null)
      expect(formula.ammoniaFreshwaterAcuteUS({temperature:1})).to.equal(null)

      expect(formula.ammoniaFreshwaterAcuteUS({
        temperature: 0,
        pH: 0
      }).toFixed(15)).to.equal((38.999997579018896).toFixed(15))

      expect(formula.ammoniaFreshwaterAcuteUS({
        temperature: 100,
        pH: 7
      }).toFixed(15)).to.equal((0.022094309501517).toFixed(15))

      done()
    })

    it('Should calculate Ammonia (Freshwater Chronic)', function (done) {
      expect(formula.ammoniaFreshwaterChronicUS({})).to.equal(null)
      expect(formula.ammoniaFreshwaterChronicUS({pH:1})).to.equal(null)
      expect(formula.ammoniaFreshwaterChronicUS({temperature:1})).to.equal(null)

      expect(formula.ammoniaFreshwaterChronicUS({
        temperature: 0,
        pH: 0
      }).toFixed(15)).to.equal((2.746278579842297).toFixed(15))

      expect(formula.ammoniaFreshwaterChronicUS({
        temperature: 100,
        pH: 7
      }).toFixed(15)).to.equal((0.005698696304634).toFixed(15))

      done()
    })

    it('Should calculate Cadmium Total (Freshwater Acute)', function (done) {
      expect(formula.cadmiumTotalFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.cadmiumTotalFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.cadmiumTotalFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((0.020941969992583).toFixed(15))

      done()
    })

    it('Should calculate Cadmium Dissolved (Freshwater Acute)', function (done) {
      expect(formula.cadmiumDissolvedFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.cadmiumDissolvedFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((0.023804150915409).toFixed(15))

      // NaN
      expect(formula.cadmiumDissolvedFreshwaterAcuteUS({
        TH: 0
      })).to.equal(null)

      done()
    })

    it('Should calculate Cadmium Total (Freshwater Chronic)', function (done) {
      expect(formula.cadmiumTotalFreshwaterChronicUS({})).to.equal(null)

      expect(formula.cadmiumTotalFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.cadmiumTotalFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((0.020060551586337).toFixed(15))

      done()
    })

    it('Should calculate Cadmium Dissolved (Freshwater Chronic)', function (done) {
      expect(formula.cadmiumDissolvedFreshwaterChronicUS({})).to.equal(null)

      expect(formula.cadmiumDissolvedFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((0.022100147987223).toFixed(15))

      // NaN
      expect(formula.cadmiumDissolvedFreshwaterChronicUS({
        TH: 0
      })).to.equal(null)

      done()
    })

    it('Should calculate Chromium(III) Total (Freshwater Acute)', function (done) {
      expect(formula.chromiumiiiTotalFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.chromiumiiiTotalFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.chromiumiiiTotalFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((41.496122950792731).toFixed(15))

      done()
    })

    it('Should calculate Chromium(III) Dissolved (Freshwater Acute)', function (done) {
      expect(formula.chromiumiiiDissolvedFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.chromiumiiiDissolvedFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.chromiumiiiDissolvedFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((13.112774852450503).toFixed(15))

      done()
    })

    it('Should calculate Chromium(III) Total (Freshwater Chronic)', function (done) {
      expect(formula.chromiumiiiTotalFreshwaterChronicUS({})).to.equal(null)

      expect(formula.chromiumiiiTotalFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.chromiumiiiTotalFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((1.983375120842844).toFixed(15))

      done()
    })

    it('Should calculate Chromium(III) Dissolved (Freshwater Chronic)', function (done) {
      expect(formula.chromiumiiiDissolvedFreshwaterChronicUS({})).to.equal(null)

      expect(formula.chromiumiiiDissolvedFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.chromiumiiiDissolvedFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((1.705702603924846).toFixed(15))

      done()
    })

    it('Should calculate Lead Total (Freshwater Acute)', function (done) {
      expect(formula.leadTotalFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.leadTotalFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.leadTotalFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((0.232236274729759).toFixed(15))

      done()
    })

    it('Should calculate Lead Dissolved (Freshwater Acute)', function (done) {
      expect(formula.leadDissolvedFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.leadDissolvedFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((0.339536400743149).toFixed(15))

      // NaN
      expect(formula.leadDissolvedFreshwaterAcuteUS({
        TH: 0
      })).to.equal(null)

      done()
    })

    it('Should calculate Lead Total (Freshwater Chronic)', function (done) {
      expect(formula.leadTotalFreshwaterChronicUS({})).to.equal(null)

      expect(formula.leadTotalFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.leadTotalFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((0.009049914217903).toFixed(15))

      done()
    })

    it('Should calculate Lead Dissolved (Freshwater Chronic)', function (done) {
      expect(formula.leadDissolvedFreshwaterChronicUS({})).to.equal(null)

      expect(formula.leadDissolvedFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((0.013231246084000).toFixed(15))

      expect(formula.leadDissolvedFreshwaterChronicUS({
        TH: 0
      })).to.equal(null)

      done()
    })

    it('Should calculate Nickel Total (Freshwater Acute)', function (done) {
      expect(formula.nickelTotalFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.nickelTotalFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.nickelTotalFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((9.535293310146759).toFixed(15))

      done()
    })

    it('Should calculate Nickel Dissolved (Freshwater Acute)', function (done) {
      expect(formula.nickelDissolvedFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.nickelDissolvedFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.nickelDissolvedFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((9.516222723526466).toFixed(15))

      done()
    })

    it('Should calculate Nickel Total (Freshwater Chronic)', function (done) {
      expect(formula.nickelTotalFreshwaterChronicUS({})).to.equal(null)

      expect(formula.nickelTotalFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.nickelTotalFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((1.060138966497076).toFixed(15))

      done()
    })

    it('Should calculate Nickel Dissolved (Freshwater Chronic)', function (done) {
      expect(formula.nickelDissolvedFreshwaterChronicUS({})).to.equal(null)

      expect(formula.nickelDissolvedFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.nickelDissolvedFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((1.056958549597585).toFixed(15))

      done()
    })

    it('Should calculate Pentachlorophenol (Freshwater Acute)', function (done) {
      expect(formula.pentachlorophenolFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.pentachlorophenolFreshwaterAcuteUS({
        pH:7
      }).toFixed(15)).to.equal((0.772882148578799).toFixed(15))

      // Imaginary
      expect(formula.pentachlorophenolFreshwaterAcuteUS({
        pH: 0
      })).to.equal(null)

      done()
    })

    it('Should calculate Pentachlorophenol (Freshwater Chronic)', function (done) {
      expect(formula.pentachlorophenolFreshwaterChronicUS({})).to.equal(null)

      expect(formula.pentachlorophenolFreshwaterChronicUS({
        pH:7
      }).toFixed(15)).to.equal((0.642380063506292).toFixed(15))

      // Imaginary
      expect(formula.pentachlorophenolFreshwaterChronicUS({
        pH: 0
      })).to.equal(null)

      done()
    })

    it('Should calculate Silver Total (Freshwater Acute)', function (done) {
      expect(formula.silverTotalFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.silverTotalFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.silverTotalFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((0.001374039963621).toFixed(15))

      done()
    })

    it('Should calculate Silver Dissolved (Freshwater Acute)', function (done) {
      expect(formula.silverDissolvedFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.silverDissolvedFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.silverDissolvedFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((0.001167933969078).toFixed(15))

      done()
    })

    it('Should calculate Zinc Total (Freshwater Acute)', function (done) {
      expect(formula.zincTotalFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.zincTotalFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.zincTotalFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((2.420562618182530).toFixed(15))

      done()
    })

    it('Should calculate Zinc Dissolved (Freshwater Acute)', function (done) {
      expect(formula.zincDissolvedFreshwaterAcuteUS({})).to.equal(null)

      expect(formula.zincDissolvedFreshwaterAcuteUS({
        TH: 0
      })).to.equal(0)

      expect(formula.zincDissolvedFreshwaterAcuteUS({
        TH:1
      }).toFixed(15)).to.equal((2.367310240582515).toFixed(15))

      done()
    })

    it('Should calculate Zinc Total (Freshwater Chronic)', function (done) {
      expect(formula.zincTotalFreshwaterChronicUS({})).to.equal(null)

      expect(formula.zincTotalFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.zincTotalFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((2.420562618182530).toFixed(15))

      done()
    })

    it('Should calculate Zinc Dissolved (Freshwater Chronic)', function (done) {
      expect(formula.zincDissolvedFreshwaterChronicUS({})).to.equal(null)

      expect(formula.zincDissolvedFreshwaterChronicUS({
        TH: 0
      })).to.equal(0)

      expect(formula.zincDissolvedFreshwaterChronicUS({
        TH:1
      }).toFixed(15)).to.equal((2.386674741527975).toFixed(15))

      done()
    })
  })

})
