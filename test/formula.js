const expect = require('chai').expect
const formula = require('../formula.js')

describe('Guideline Formulas', function () {

  describe('Freshwater', function () {
    it('Should calculate Aluminum Total Chronic (CA)', function (done) {

      expect(formula.freshwater_Aluminum__Total_CA_Chronic({})).to.equal(null)

      expect(formula.freshwater_Aluminum__Total_CA_Chronic({
        pH: 1
      })).to.equal(5)

      expect(formula.freshwater_Aluminum__Total_CA_Chronic({
        pH: 6.5
      })).to.equal(100)

      done()
    })


    it('Should calculate Ammonia Acute (US)', function (done) {
      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Acute({pH:1})).to.equal(null)
      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Acute({temperature:1})).to.equal(null)

      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Acute({
        temperature: 0,
        pH: 0
      }).toFixed(15)).to.equal((38.999997579018896).toFixed(15))

      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Acute({
        temperature: 100,
        pH: 7
      }).toFixed(15)).to.equal((0.022094309501517).toFixed(15))

      done()
    })

    it('Should calculate Ammonia Chronic (US)', function (done) {
      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Chronic({pH:1})).to.equal(null)
      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Chronic({temperature:1})).to.equal(null)

      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Chronic({
        temperature: 0,
        pH: 0
      }).toFixed(15)).to.equal((2.746278579842297).toFixed(15))

      expect(formula.freshwater_Ammonia_asN_Unfiltered_US_Chronic({
        temperature: 100,
        pH: 7
      }).toFixed(15)).to.equal((0.005698696304634).toFixed(15))

      done()
    })

    it('Should calculate Ammonia and ammonium as N Unfiltered (CA)', function (done) {
      expect(formula.freshwater_Ammoniaandammonium_asN_Unfiltered_CA_Chronic({})).to.equal(null)
      expect(formula.freshwater_Ammoniaandammonium_asN_Unfiltered_CA_Chronic({pH:1})).to.equal(null)
      expect(formula.freshwater_Ammoniaandammonium_asN_Unfiltered_CA_Chronic({temperature:1})).to.equal(null)

      expect(formula.freshwater_Ammoniaandammonium_asN_Unfiltered_CA_Chronic({
        temperature: 0,
        pH: 0
      }).toFixed(15)).to.equal((189773005.218902647495270).toFixed(15))

      expect(formula.freshwater_Ammoniaandammonium_asN_Unfiltered_CA_Chronic({
        temperature: 100,
        pH: 7
      }).toFixed(15)).to.equal((0.055426888853467).toFixed(15))

      done()
    })

    it('Should calculate Ammonia and ammonium as NH3 Unfiltered (CA)', function (done) {
      expect(formula.freshwater_Ammoniaandammonium_asNH3_Unfiltered_CA_Chronic({})).to.equal(null)
      expect(formula.freshwater_Ammoniaandammonium_asNH3_Unfiltered_CA_Chronic({pH:1})).to.equal(null)
      expect(formula.freshwater_Ammoniaandammonium_asNH3_Unfiltered_CA_Chronic({temperature:1})).to.equal(null)

      expect(formula.freshwater_Ammoniaandammonium_asNH3_Unfiltered_CA_Chronic({
        temperature: 0,
        pH: 0
      }).toFixed(15)).to.equal((230755113.349833011627197).toFixed(15))

      expect(formula.freshwater_Ammoniaandammonium_asNH3_Unfiltered_CA_Chronic({
        temperature: 100,
        pH: 7
      }).toFixed(15)).to.equal((0.067396508819878).toFixed(15))

      done()
    })

    it('Should calculate Cadmium Total Acute (CA)', function (done) {
      expect(formula.freshwater_Cadmium__Total_CA_Acute({})).to.equal(null)

      expect(formula.freshwater_Cadmium__Total_CA_Acute({
        TH: 5
      })).to.equal(0.11)

      expect(formula.freshwater_Cadmium__Total_CA_Acute({
        TH: 100
      }).toFixed(15)).to.equal((2.0989398836235241).toFixed(15))

      expect(formula.freshwater_Cadmium__Total_CA_Acute({
        TH: 361
      })).to.equal(7.7)

      done()
    })

    it('Should calculate Cadmium Total Chronic (CA)', function (done) {
      expect(formula.freshwater_Cadmium__Total_CA_Chronic({})).to.equal(null)

      expect(formula.freshwater_Cadmium__Total_CA_Chronic({
        TH: 10
      })).to.equal(0.04)

      expect(formula.freshwater_Cadmium__Total_CA_Chronic({
        TH: 100
      }).toFixed(15)).to.equal((0.158489319246111).toFixed(15))

      expect(formula.freshwater_Cadmium__Total_CA_Chronic({
        TH: 300
      })).to.equal(0.37)

      done()
    })

    it('Should calculate Cadmium Dissolved Acute (US)', function (done) {
      expect(formula.freshwater_Cadmium__Dissolved_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Cadmium__Dissolved_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Cadmium__Dissolved_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((0.023804150915409).toFixed(15))

      done()
    })

    it('Should calculate Cadmium Dissolved Chronic (US)', function (done) {
      expect(formula.freshwater_Cadmium__Dissolved_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Cadmium__Dissolved_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Cadmium__Dissolved_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((0.022100147987223).toFixed(15))

      done()
    })

    it('Should calculate Cadmium Total Acute (US)', function (done) {
      expect(formula.freshwater_Cadmium__Total_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Cadmium__Total_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Cadmium__Total_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((0.020941969992583).toFixed(15))

      done()
    })

    it('Should calculate Cadmium Total Chronic (US)', function (done) {
      expect(formula.freshwater_Cadmium__Total_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Cadmium__Total_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Cadmium__Total_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((0.020060551586337).toFixed(15))

      done()
    })

    it('Should calculate Chromium(III) Dissolved Acute (US)', function (done) {
      expect(formula.freshwater_ChromiumIII__Dissolved_US_Acute({})).to.equal(null)
      expect(formula.freshwater_ChromiumIII__Dissolved_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_ChromiumIII__Dissolved_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((13.112774852450503).toFixed(15))

      done()
    })

    it('Should calculate Chromium(III) Dissolved Chronic (US)', function (done) {
      expect(formula.freshwater_ChromiumIII__Dissolved_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_ChromiumIII__Dissolved_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_ChromiumIII__Dissolved_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((1.705702603924846).toFixed(15))

      done()
    })

    it('Should calculate Chromium(III) Total Acute (US)', function (done) {
      expect(formula.freshwater_ChromiumIII__Total_US_Acute({})).to.equal(null)
      expect(formula.freshwater_ChromiumIII__Total_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_ChromiumIII__Total_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((41.496122950792731).toFixed(15))

      done()
    })

    it('Should calculate Chromium(III) Total Chronic (US)', function (done) {
      expect(formula.freshwater_ChromiumIII__Total_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_ChromiumIII__Total_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_ChromiumIII__Total_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((1.983375120842844).toFixed(15))

      done()
    })

    it('Should calculate Cobalt Total Chronic (CA)', function (done) {
      expect(formula.freshwater_Cobalt__Total_CA_Chronic({})).to.equal(null)

      expect(formula.freshwater_Cobalt__Total_CA_Chronic({
        TH: 10
      })).to.equal(null)

      expect(formula.freshwater_Cobalt__Total_CA_Chronic({
        TH: 100
      }).toFixed(15)).to.equal((1.019732621347850).toFixed(15))

      done()
    })

    it('Should calculate Copper Total Chronic (CA)', function (done) {
      expect(formula.freshwater_Copper__Total_CA_Chronic({})).to.equal(2)

      expect(formula.freshwater_Copper__Total_CA_Chronic({
        TH: 10
      })).to.equal(2)

      expect(formula.freshwater_Copper__Total_CA_Chronic({
        TH: 100
      }).toFixed(15)).to.equal((2.364768216641758).toFixed(15))

      expect(formula.freshwater_Copper__Total_CA_Chronic({
        TH: 300
      })).to.equal(4)

      done()
    })

    it('Should calculate Iron Total Chronic (CA)', function (done) {
      expect(formula.freshwater_Iron__Total_CA_Chronic({})).to.equal(null)

      expect(formula.freshwater_Iron__Total_CA_Chronic({
        DOC: 0,
        pH: 0
      })).to.equal(0)

      expect(formula.freshwater_Iron__Total_CA_Chronic({
        DOC: 10,
        pH: 7
      }).toFixed(15)).to.equal((4138.276175584722296).toFixed(15))

      done()
    })

    it('Should calculate Lead Dissolved Acute (US)', function (done) {
      expect(formula.freshwater_Lead__Dissolved_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Lead__Dissolved_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Lead__Dissolved_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((0.339536400743149).toFixed(15))

      done()
    })

    it('Should calculate Lead Dissolved Chronic (CA)', function (done) {
      expect(formula.freshwater_Lead__Dissolved_CA_Chronic({})).to.equal(null)

      expect(formula.freshwater_Lead__Dissolved_CA_Chronic({
        DOC: 0,
        TH:0
      })).to.equal(null)

      expect(formula.freshwater_Lead__Dissolved_CA_Chronic({
        DOC: 10,
        TH:5
      }).toFixed(15)).to.equal((6.980694783890016).toFixed(15))

      done()
    })

    it('Should calculate Lead Dissolved Chronic (US)', function (done) {
      expect(formula.freshwater_Lead__Dissolved_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Lead__Dissolved_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Lead__Dissolved_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((0.013231246084000).toFixed(15))

      done()
    })

    it('Should calculate Lead Total Acute (US)', function (done) {
      expect(formula.freshwater_Lead__Total_US_Acute({})).to.equal(null)

      expect(formula.freshwater_Lead__Total_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Lead__Total_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((0.232236274729759).toFixed(15))

      done()
    })

    it('Should calculate Lead Total Chronic (CA)', function (done) {
      expect(formula.freshwater_Lead__Total_CA_Chronic({})).to.equal(1)

      expect(formula.freshwater_Lead__Total_CA_Chronic({
        TH: 10
      })).to.equal(1)

      expect(formula.freshwater_Lead__Total_CA_Chronic({
        TH: 100
      }).toFixed(15)).to.equal((3.181591829189213).toFixed(15))

      expect(formula.freshwater_Lead__Total_CA_Chronic({
        TH: 300
      })).to.equal(7)

      done()
    })

    it('Should calculate Lead Total Chronic (US)', function (done) {
      expect(formula.freshwater_Lead__Total_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Lead__Total_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Lead__Total_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((0.009049914217903).toFixed(15))

      done()
    })

    it('Should calculate Manganese Acute (CA)', function (done) {
      expect(formula.freshwater_Manganese___CA_Acute({})).to.equal(null)
      expect(formula.freshwater_Manganese___CA_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Manganese___CA_Acute({
        TH:1
      }).toFixed(15)).to.equal((116.745925898989910).toFixed(15))

      done()
    })

    it('Should calculate Nickel Dissolved Acute (US)', function (done) {
      expect(formula.freshwater_Nickel__Dissolved_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Nickel__Dissolved_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Nickel__Dissolved_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((9.516222723526466).toFixed(15))

      done()
    })

    it('Should calculate Nickel Dissolved Chronic (US)', function (done) {
      expect(formula.freshwater_Nickel__Dissolved_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Nickel__Dissolved_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Nickel__Dissolved_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((1.056958549597585).toFixed(15))

      done()
    })

    it('Should calculate Nickel Total Acute (US)', function (done) {
      expect(formula.freshwater_Nickel__Total_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Nickel__Total_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Nickel__Total_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((9.535293310146759).toFixed(15))

      done()
    })

    it('Should calculate Nickel Total Chronic (CA)', function (done) {
      expect(formula.freshwater_Nickel__Total_CA_Chronic({})).to.equal(25)

      expect(formula.freshwater_Nickel__Total_CA_Chronic({
        TH: 10
      })).to.equal(25)

      expect(formula.freshwater_Nickel__Total_CA_Chronic({
        TH: 100
      }).toFixed(15)).to.equal((95.576726269111492).toFixed(15))

      expect(formula.freshwater_Nickel__Total_CA_Chronic({
        TH: 300
      })).to.equal(150)

      done()
    })

    it('Should calculate Nickel Total Chronic (US)', function (done) {
      expect(formula.freshwater_Nickel__Total_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Nickel__Total_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Nickel__Total_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((1.060138966497076).toFixed(15))

      done()
    })


    it('Should calculate Pentachlorophenol Acute (US)', function (done) {
      expect(formula.freshwater_Pentachlorophenol___US_Acute({})).to.equal(null)

      expect(formula.freshwater_Pentachlorophenol___US_Acute({
        pH: 0
      }).toFixed(15)).to.equal((0.007681042491145243).toFixed(15))

      expect(formula.freshwater_Pentachlorophenol___US_Acute({
        pH:7
      }).toFixed(15)).to.equal((8.723320877521848).toFixed(15))

      done()
    })

    it('Should calculate Pentachlorophenol Chronic (US)', function (done) {
      expect(formula.freshwater_Pentachlorophenol___US_Chronic({})).to.equal(null)

      expect(formula.freshwater_Pentachlorophenol___US_Chronic({
        pH: 0
      }).toFixed(15)).to.equal((0.0058929415012239994).toFixed(15))

      expect(formula.freshwater_Pentachlorophenol___US_Chronic({
        pH:7
      }).toFixed(15)).to.equal((6.692583680783364).toFixed(15))

      done()
    })

    it('Should calculate Silver Dissolved Acute (US)', function (done) {
      expect(formula.freshwater_Silver__Dissolved_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Silver__Dissolved_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Silver__Dissolved_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((0.001167933969078).toFixed(15))

      done()
    })

    it('Should calculate Silver Total Acute (US)', function (done) {
      expect(formula.freshwater_Silver__Total_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Silver__Total_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Silver__Total_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((0.001374039963621).toFixed(15))

      done()
    })

    it('Should calculate Zinc Dissolved Acute (CA)', function (done) {
      expect(formula.freshwater_Zinc__Dissolved_CA_Acute({})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_CA_Acute({TH:1})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_CA_Acute({DOC:1})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_CA_Acute({TH:0,DOC:1})).to.equal(null)

      expect(formula.freshwater_Zinc__Dissolved_CA_Acute({
        TH: 100,
        DOC: 1
      }).toFixed(15)).to.equal((99.694126642648090).toFixed(15))

      expect(formula.freshwater_Zinc__Dissolved_CA_Acute({
        TH: 1,
        DOC: 1
      })).to.equal(37)

      done()
    })

    it('Should calculate Zinc Dissolved Chronic (CA)', function (done) {
      expect(formula.freshwater_Zinc__Dissolved_CA_Chronic({})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_CA_Chronic({TH:1})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_CA_Chronic({DOC:1})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_CA_Chronic({pH:1})).to.equal(null)

      expect(formula.freshwater_Zinc__Dissolved_CA_Chronic({TH:0,DOC:0,pH:0})).to.equal(null)

      expect(formula.freshwater_Zinc__Dissolved_CA_Chronic({
        TH: 100,
        DOC: 1,
        pH: 7
      }).toFixed(15)).to.equal((26.604920134101859).toFixed(15))

      expect(formula.freshwater_Zinc__Dissolved_CA_Chronic({
        TH: 1,
        DOC: 1,
        pH: 1
      })).to.equal(7)

      done()
    })

    it('Should calculate Zinc Dissolved Acute (US)', function (done) {
      expect(formula.freshwater_Zinc__Dissolved_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Zinc__Dissolved_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((2.367310240582515).toFixed(15))

      done()
    })

    it('Should calculate Zinc Dissolved Chronic (US)', function (done) {
      expect(formula.freshwater_Zinc__Dissolved_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Zinc__Dissolved_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Zinc__Dissolved_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((2.386674741527975).toFixed(15))

      done()
    })

    it('Should calculate Zinc Total Acute (US)', function (done) {
      expect(formula.freshwater_Zinc__Total_US_Acute({})).to.equal(null)
      expect(formula.freshwater_Zinc__Total_US_Acute({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Zinc__Total_US_Acute({
        TH:1
      }).toFixed(15)).to.equal((2.420562618182530).toFixed(15))

      done()
    })

    it('Should calculate Zinc Total Chronic (US)', function (done) {
      expect(formula.freshwater_Zinc__Total_US_Chronic({})).to.equal(null)
      expect(formula.freshwater_Zinc__Total_US_Chronic({ TH: 0 })).to.equal(null)

      expect(formula.freshwater_Zinc__Total_US_Chronic({
        TH:1
      }).toFixed(15)).to.equal((2.420562618182530).toFixed(15))

      done()
    })
  })

})
