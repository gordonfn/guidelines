
/* This page is generated during the build process. */
/* global describe, it */
const expect = require('chai').expect
const formula = require('../lib/formula.js')

describe('Formulas', function () {

  describe('waterFreshwaterChronicAlkalinityWorkingCABC', function () {
  
    it('Should not break with no DCa', function (done) {
      try {
        formula.waterFreshwaterChronicAlkalinityWorkingCABC({"DCa":0})
        formula.waterFreshwaterChronicAlkalinityWorkingCABC({"DCa":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with DCa lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAlkalinityWorkingCABC({"DCa":3})
        formula.waterFreshwaterChronicAlkalinityWorkingCABC({"DCa":7})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with DCa upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAlkalinityWorkingCABC({"DCa":5})
        formula.waterFreshwaterChronicAlkalinityWorkingCABC({"DCa":9})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteAluminumDissolvedApprovedCABC', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterAcuteAluminumDissolvedApprovedCABC({"pH":0})
        formula.waterFreshwaterAcuteAluminumDissolvedApprovedCABC({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH lowerbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteAluminumDissolvedApprovedCABC({"pH":-1})
        formula.waterFreshwaterAcuteAluminumDissolvedApprovedCABC({"pH":5.5})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH upperbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteAluminumDissolvedApprovedCABC({"pH":7.5})
        formula.waterFreshwaterAcuteAluminumDissolvedApprovedCABC({"pH":15})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicAluminumDissolvedApprovedCABC', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicAluminumDissolvedApprovedCABC({"pH":0})
        formula.waterFreshwaterChronicAluminumDissolvedApprovedCABC({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAluminumDissolvedApprovedCABC({"pH":-1})
        formula.waterFreshwaterChronicAluminumDissolvedApprovedCABC({"pH":5.5})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAluminumDissolvedApprovedCABC({"pH":7.5})
        formula.waterFreshwaterChronicAluminumDissolvedApprovedCABC({"pH":15})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteAmmoniaAsNApprovedCABC', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":0,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":null,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH lowerbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":5.5,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":7,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":8,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH upperbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":10,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":7.5,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":15,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":0,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":0,"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":0,"temperature":-1})
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":0,"temperature":19})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNApprovedCABC({"pH":0,"temperature":21})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicAmmoniaAsNApprovedCABC', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":null,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":5.5,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":6.7,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":7,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":8,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":8.7,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":9,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":10,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":7.5,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":15,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":-1})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":14})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":19})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":16})
        formula.waterFreshwaterChronicAmmoniaAsNApprovedCABC({"pH":0,"temperature":21})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteAmmoniaAsNUnfilteredApprovedUS', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNUnfilteredApprovedUS({"pH":0,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNUnfilteredApprovedUS({"pH":null,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterAcuteAmmoniaAsNUnfilteredApprovedUS({"pH":0,"temperature":0})
        formula.waterFreshwaterAcuteAmmoniaAsNUnfilteredApprovedUS({"pH":0,"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicAmmoniaAsNUnfilteredApprovedUS', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNUnfilteredApprovedUS({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNUnfilteredApprovedUS({"pH":null,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaAsNUnfilteredApprovedUS({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaAsNUnfilteredApprovedUS({"pH":0,"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicAluminumTotalApprovedCA', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicAluminumTotalApprovedCA({"pH":0})
        formula.waterFreshwaterChronicAluminumTotalApprovedCA({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAluminumTotalApprovedCA({"pH":-1})
        formula.waterFreshwaterChronicAluminumTotalApprovedCA({"pH":5.5})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicAluminumTotalApprovedCA({"pH":7.5})
        formula.waterFreshwaterChronicAluminumTotalApprovedCA({"pH":15})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterMarineChronicChlorideDissolvedApprovedCABC', function () {
  
    it('Should not break with no DCl', function (done) {
      try {
        formula.waterMarineChronicChlorideDissolvedApprovedCABC({"DCl":0})
        formula.waterMarineChronicChlorideDissolvedApprovedCABC({"DCl":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicAmmoniaandammoniumAsNH3UnfilteredApprovedCA', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNH3UnfilteredApprovedCA({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNH3UnfilteredApprovedCA({"pH":null,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNH3UnfilteredApprovedCA({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNH3UnfilteredApprovedCA({"pH":0,"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicApparentColourApprovedCABC', function () {
  
    it('Should not break with no apparentcolor', function (done) {
      try {
        formula.waterFreshwaterChronicApparentColourApprovedCABC({"apparentcolor":0})
        formula.waterFreshwaterChronicApparentColourApprovedCABC({"apparentcolor":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicMercuryApprovedCABC', function () {
  
    it('Should not break with no MeHg', function (done) {
      try {
        formula.waterFreshwaterChronicMercuryApprovedCABC({"MeHg":0,"Hg":0})
        formula.waterFreshwaterChronicMercuryApprovedCABC({"MeHg":null,"Hg":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with MeHg upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicMercuryApprovedCABC({"MeHg":1.005,"Hg":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no Hg', function (done) {
      try {
        formula.waterFreshwaterChronicMercuryApprovedCABC({"MeHg":0,"Hg":0})
        formula.waterFreshwaterChronicMercuryApprovedCABC({"MeHg":0,"Hg":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with Hg upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicMercuryApprovedCABC({"MeHg":0,"Hg":1.005})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterMarineChronicMercuryApprovedCABC', function () {
  
    it('Should not break with no MeHg', function (done) {
      try {
        formula.waterMarineChronicMercuryApprovedCABC({"MeHg":0,"Hg":0})
        formula.waterMarineChronicMercuryApprovedCABC({"MeHg":null,"Hg":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with MeHg upperbounds', function (done) {
      try {
        formula.waterMarineChronicMercuryApprovedCABC({"MeHg":1.005,"Hg":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no Hg', function (done) {
      try {
        formula.waterMarineChronicMercuryApprovedCABC({"MeHg":0,"Hg":0})
        formula.waterMarineChronicMercuryApprovedCABC({"MeHg":0,"Hg":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with Hg upperbounds', function (done) {
      try {
        formula.waterMarineChronicMercuryApprovedCABC({"MeHg":0,"Hg":1.005})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC', function () {
  
    it('Should not break with no Cl', function (done) {
      try {
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":0})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with Cl lowerbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":-1})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":1})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":3})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":5})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":7})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":9})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with Cl upperbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":3})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":5})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":7})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":9})
        formula.waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC({"Cl":11})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC', function () {
  
    it('Should not break with no Cl', function (done) {
      try {
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":0})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with Cl lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":-1})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":1})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":3})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":5})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":7})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":9})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with Cl upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":3})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":5})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":7})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":9})
        formula.waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC({"Cl":11})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicLeadDissolvedApprovedCA', function () {
  
    it('Should not break with no DOC', function (done) {
      try {
        formula.waterFreshwaterChronicLeadDissolvedApprovedCA({"DOC":0})
        formula.waterFreshwaterChronicLeadDissolvedApprovedCA({"DOC":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicIronTotalDraftCA', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicIronTotalDraftCA({"pH":0,"DOC":0})
        formula.waterFreshwaterChronicIronTotalDraftCA({"pH":null,"DOC":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no DOC', function (done) {
      try {
        formula.waterFreshwaterChronicIronTotalDraftCA({"pH":0,"DOC":0})
        formula.waterFreshwaterChronicIronTotalDraftCA({"pH":0,"DOC":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteDehydroabieticacidInterimCAON', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":0})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH lowerbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":4})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":5})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":5.5})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":6})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":6.5})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":7})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with pH upperbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":6})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":7})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":7.5})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":8})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":8.5})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":9})
        formula.waterFreshwaterAcuteDehydroabieticacidInterimCAON({"pH":10})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON', function () {
  
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":0})
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":-1})
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":4})
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":9})
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":19})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":6})
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":11})
        formula.waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":21})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON', function () {
  
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":0})
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":-1})
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":4})
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":9})
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":19})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":6})
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":11})
        formula.waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON({"temperature":21})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicLeadApprovedCAON', function () {
  
    it('Should not break with no alkalinity', function (done) {
      try {
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":0})
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with alkalinity lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":-1})
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":19})
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":39})
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":79})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with alkalinity upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":21})
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":41})
        formula.waterFreshwaterChronicLeadApprovedCAON({"alkalinity":81})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteAceticacidApprovedCAQC', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterAcuteAceticacidApprovedCAQC({"pH":0})
        formula.waterFreshwaterAcuteAceticacidApprovedCAQC({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicAceticacidApprovedCAQC', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicAceticacidApprovedCAQC({"pH":0})
        formula.waterFreshwaterChronicAceticacidApprovedCAQC({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicAmmoniaandammoniumAsNUnfilteredApprovedCA', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNUnfilteredApprovedCA({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNUnfilteredApprovedCA({"pH":null,"temperature":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNUnfilteredApprovedCA({"pH":0,"temperature":0})
        formula.waterFreshwaterChronicAmmoniaandammoniumAsNUnfilteredApprovedCA({"pH":0,"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcutePentachlorophenolApprovedUS', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterAcutePentachlorophenolApprovedUS({"pH":0})
        formula.waterFreshwaterAcutePentachlorophenolApprovedUS({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicPentachlorophenolApprovedUS', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicPentachlorophenolApprovedUS({"pH":0})
        formula.waterFreshwaterChronicPentachlorophenolApprovedUS({"pH":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteZincDissolvedApprovedCA', function () {
  
    it('Should not break with no DOC', function (done) {
      try {
        formula.waterFreshwaterAcuteZincDissolvedApprovedCA({"DOC":0})
        formula.waterFreshwaterAcuteZincDissolvedApprovedCA({"DOC":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteEarlylifestageDissolvedOxygenDissolvedApprovedUS', function () {
  
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterAcuteEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":0})
        formula.waterFreshwaterAcuteEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":4})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":6})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicEarlylifestageDissolvedOxygenDissolvedApprovedUS', function () {
  
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChronicEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":0})
        formula.waterFreshwaterChronicEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":4})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicEarlylifestageDissolvedOxygenDissolvedApprovedUS({"temperature":6})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterAcuteOtherlifestageDissolvedOxygenDissolvedApprovedUS', function () {
  
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterAcuteOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":0})
        formula.waterFreshwaterAcuteOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":4})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterAcuteOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":6})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicOtherlifestageDissolvedOxygenDissolvedApprovedUS', function () {
  
    it('Should not break with no temperature', function (done) {
      try {
        formula.waterFreshwaterChronicOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":0})
        formula.waterFreshwaterChronicOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature lowerbounds', function (done) {
      try {
        formula.waterFreshwaterChronicOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":4})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with temperature upperbounds', function (done) {
      try {
        formula.waterFreshwaterChronicOtherlifestageDissolvedOxygenDissolvedApprovedUS({"temperature":6})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
  describe('waterFreshwaterChronicZincDissolvedApprovedCA', function () {
  
    it('Should not break with no pH', function (done) {
      try {
        formula.waterFreshwaterChronicZincDissolvedApprovedCA({"pH":0,"DOC":0})
        formula.waterFreshwaterChronicZincDissolvedApprovedCA({"pH":null,"DOC":0})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
    it('Should not break with no DOC', function (done) {
      try {
        formula.waterFreshwaterChronicZincDissolvedApprovedCA({"pH":0,"DOC":0})
        formula.waterFreshwaterChronicZincDissolvedApprovedCA({"pH":0,"DOC":null})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    
  })
      
})
