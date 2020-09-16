
/* This page is generated during the build process. */
const math = require('./math')
const calculateHardness = require('./hardness')

const water_Freshwater_Acute_Copper__Total_CAAB = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`1000*exp(0.979123*log(${hardness}, e)-8.64497)`)
}

const water_Freshwater_Acute_Manganese__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (25 < hardness && hardness < 259) {
    return math.evaluate(`0.01102*${hardness} + 0.54`)
  }
  return null
}

const water_Freshwater_Chronic_Manganese__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (37 < hardness && hardness < 450) {
    return math.evaluate(`0.0044*${hardness} + 0.605`)
  }
  return null
}

const water_Freshwater_Chronic_Nickel__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (hardness <= 60) {
    return 25
  } else if (60 < hardness && hardness < 180) {
    return math.evaluate(`exp(0.76*log(${hardness}, e)+1.06)`)
  } else {
    return 150
  } 
}

const water_Freshwater_Acute_Silver__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (100 < hardness) {
    return 3.0
  } else {
    return 0.1
  }
}

const water_Freshwater_Chronic_Silver__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (100 < hardness) {
    return 1.5
  } else {
    return 0.05
  }
}

const water_Freshwater_Acute_Aluminum__Dissolved_CABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (pH < 6.5) {
    return math.evaluate(`exp(1.209 - 2.426*${pH} + 0.286*${pH}^2)`)
  } else {
    return 0.1
  }
}

const water_Freshwater_Chronic_Aluminum__Dissolved_CABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (pH < 6.5) {
    return math.evaluate(`exp(1.6 - 3.327*${pH} + 0.402*${pH}^2)`)
  } else {
    return 0.05
  }
}

const water_Freshwater_Acute_Cadmium__Dissolved_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (7 < hardness && hardness < 455) {
    return math.evaluate(`exp(1.03*log(${hardness}, e)-5.274)`)
  }
  return null
}

const water_Freshwater_Chronic_Cadmium__Dissolved_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (3.4 < hardness && hardness < 285) {
    return math.evaluate(`exp(0.736*log(${hardness}, e)-4.943)`)
  }
  return null
}

const water_Freshwater_Acute_Fluoride___CABC = (params) => {
  const hardness = calculateHardness(params)
  if (hardness <=10) {
    return 0.4
  } else if (10 < hardness && hardness < 385) {
    return math.evaluate(`0.01*(-51.73+92.57*log(${hardness}))`)
  }
  return null
}

const water_Freshwater_Acute_Lead__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (hardness <= 8) {
    return 3
  } else if (8 < hardness && hardness < 360) {
    return math.evaluate(`exp(1.273*log(${hardness}, e)-1.460)`)
  }
  return null
}

const water_Freshwater_Chronic_Lead__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (8 < hardness && hardness < 360) {
    return math.evaluate(`exp(1.273*log(${hardness}, e)-4.705)`)
  }
  return null
}

const water_Freshwater_Chronic_Mercury__Total_CABC = (params) => {
  const { MeHg, Hg } = params
  if ( !math.isValid(MeHg) || !math.isValid(Hg) ) { return null }
  if (MeHg <= 0.005*Hg) {
    return 0.02
  } else {
    return math.evaluate(`(0.0001/(${MeHg}/${Hg}))`)
  }
}

const water_Marine_Chronic_Mercury__Total_CABC = (params) => {
  const { MeHg, Hg } = params
  if ( !math.isValid(MeHg) || !math.isValid(Hg) ) { return null }
  if (MeHg <= 0.005*Hg) {
    return 0.02
  } else {
    return math.evaluate(`(0.0001/(${MeHg}/${Hg}))`)
  }
}

const water_Freshwater_Acute_Nitrite_asN__CABC = (params) => {
  const { Cl } = params
  if ( !math.isValid(Cl) ) { return null }
  if (Cl <= 2) {
    return 0.06
  } else if (2 < Cl && Cl <= 4) {
    return 0.12
  } else if (4 < Cl && Cl <= 6) {
    return 0.18
  } else if (6 < Cl && Cl <= 8) {
    return 0.24
  } else if (8 < Cl && Cl <= 10) {
    return 0.30
  } else {
    return 0.60
  }
}

const water_Freshwater_Chronic_Nitrite_asN__CABC = (params) => {
  const { Cl } = params
  if ( !math.isValid(Cl) ) { return null }
  if (Cl <= 2) {
    return 0.02
  } else if (2 < Cl && Cl <= 4) {
    return 0.04
  } else if (4 < Cl && Cl <= 6) {
    return 0.06
  } else if (6 < Cl && Cl <= 8) {
    return 0.08
  } else if (8 < Cl && Cl <= 10) {
    return 0.10
  } else {
    return 0.20
  }
}

const water_Marine_Chronic_pH___CABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`7 <= ${pH} && ${pH} <= 8.7`)
}

const water_Marine_Chronic_pHlab___CABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`7 <= ${pH} && ${pH} <= 8.7`)
}

const water_Freshwater_Acute_Zinc__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (90 < hardness) {
    return math.evaluate(`33+0.75*(${hardness}-90)`)
  } else {
    return 33
  }
}

const water_Freshwater_Chronic_Zinc__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if (90 < hardness ) {
    return math.evaluate(`7.5+0.75*(${hardness}-90)`)
  } else {
    return 7.5
  }
}

const water_Freshwater_Acute_Cadmium__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 5.3) {
    return 0.11
  } else if (360 < hardness) {
    return 7.7
  } else {
    return math.evaluate(`pow(10, 1.016*(log(${hardness}))-1.71)`)
  }
}

const water_Freshwater_Chronic_Cadmium__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if (0 < hardness && hardness < 17) {
    return 0.04
  } else if (280 < hardness) {
    return 0.37
  } else {
    return math.evaluate(`10^(0.83*(log(${hardness}))-2.46)`)
  }
}

const water_Freshwater_Chronic_Copper__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 82) {
    return 2
  } else if (82 <= hardness && hardness <= 180) {
    return math.evaluate(`0.2*exp(0.8545*(log(${hardness}, e))-1.465)`)
  } else if (180 < hardness) {
    return 4
  } else {
    return 2
  }
}

const water_Freshwater_Chronic_Lead__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness <= 60) {
    return 1
  } else if (180 < hardness) {
    return 7
  } else {
    return math.evaluate(`exp(1.273*(log(${hardness}, e))-4.705)`)
  }
}

const water_Freshwater_Acute_Zinc__Dissolved_CA = (params) => {
  const hardness = calculateHardness(params)
  const { DOC } = params
  if ( !math.isValid(DOC) ) { return null }
  if (0.3 <= DOC && DOC <= 17.3 && 13.8 <= hardness && hardness <= 250.5) {
    return math.evaluate(`exp(0.833*(log(${hardness}, e))+0.240*${DOC}+0.526)`)
  } else {
    return 37
  }
}

const water_Freshwater_Chronic_Zinc__Dissolved_CA = (params) => {
  const hardness = calculateHardness(params)
  const { pH, DOC } = params
  if ( !math.isValid(pH) || !math.isValid(DOC) ) { return null }
  if (0.3 <= DOC && DOC <= 22.9 && 23.4 <= hardness && hardness <= 399 && 6.5 <= pH && pH <= 8.13) {
    return math.evaluate(`exp(0.947*(log(${hardness}, e))-0.815*${pH}+0.398*(log(${DOC}, e))+4.625)`)
  } else {
    return 7
  }
}

const water_Freshwater_Chronic_Aluminum__Total_CA = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (pH < 6.5) {
    return 5
  } else if (6.5 <= pH) {
    return 100
  }
  return null
}

const water_Freshwater_Acute_Manganese___CA = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.878*(log(${hardness}, e))+4.76)`)
}

const water_Freshwater_Chronic_Nickel__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness <= 60) {
    return 25
  } else if (180 <= hardness) {
    return 150
  } else {
    return math.evaluate(`exp(0.76*(log(${hardness}, e))+1.06)`)
  }
}

const water_Freshwater_Chronic_Ammoniaandammonium_asN_Unfiltered_CA = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`0.8224*(1/pow(10, (0.0901821+2729.92/(${temperature} +273.15)) - ${pH})+1)`)
}

const water_Freshwater_Chronic_Ammoniaandammonium_asNH3_Unfiltered_CA = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`(1/pow(10, (0.0901821+2729.92/(${temperature} + 273.15)) - ${pH})+1)`)
}

const water_Freshwater_Chronic_Cobalt__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if (52 <= hardness && hardness <= 396) {
    return math.evaluate(`exp(0.414*(log(${hardness}, e))-1.887)`)
  }
  return null
}

const water_Freshwater_Chronic_Lead__Dissolved_CA = (params) => {
  const hardness = calculateHardness(params)
  const { DOC } = params
  if ( !math.isValid(DOC) ) { return null }
  if (0.5 <= DOC && DOC <= 31.5 && 4.7 <= hardness && hardness <= 511) {
    return math.evaluate(`exp(0.514*(log(${DOC}, e))+ 0.214*(log(${hardness}, e)) + 0.4152)`)
  }
  return null
}

const water_Freshwater_Chronic_Iron__Total_CA = (params) => {
  const { pH, DOC } = params
  if ( !math.isValid(pH) || !math.isValid(DOC) ) { return null }
  return math.evaluate(`exp(0.671*(log(${DOC}, e))+0.171*(${pH})+5.586)`)
}

const water_Freshwater_Acute_Cadmium__Dissolved_CAMB = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.0166*(log(${hardness}, e)-3.924)*(1.136672-0.041838*(log(${hardness}, e)))`)
}

const water_Freshwater_Chronic_Cadmium__Dissolved_CAMB = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.7409*(log(${hardness}, e))-4.719)*(1.101672-0.041838*(log(${hardness}, e)))`)
}

const water_Freshwater_Chronic_Lead___CAON = (params) => {
  const { alkalinity } = params
  if ( !math.isValid(alkalinity) ) { return null }
  if (alkalinity < 20) {
    return 5
  } else if (20 <= alkalinity && alkalinity < 40) {
    return 10
  } else if (40 <= alkalinity && alkalinity < 80) {
    return 20
  } else {
    return 25
  }
}

const water_Freshwater_Chronic_Beryllium___CAON = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 75) {
    return 11
  } else {
    return 1100
  }
}

const water_Freshwater_Acute_Dehydroabieticacid___CAON = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH <= 5) {
    return 1
  } else if (5 < pH && pH <= 6) {
    return 2
  } else if (6 < pH && pH <= 6.5) {
    return 4
  } else if (6.5 < pH && pH <= 7) {
    return 8
  } else if (7 < pH && pH <= 7.5) {
    return 12
  } else if (7.5 < pH && pH <= 8) {
    return 13
  } else if (8 < pH && pH <= 14) {
    return 14
  }
  return null
}

const water_Freshwater_Acute_Aceticacid___CAQC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(0.2732*(${pH})+9.2333)`)
}

const water_Freshwater_Chronic_Aceticacid___CAQC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(0.2732*(${pH})+7.0362)`)
}

const water_Freshwater_Acute_Barium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.0629*(log(${hardness}, e))+2.2354)`)
}

const water_Freshwater_Chronic_Barium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.0629*(log(${hardness}, e))+1.1869)`)
}

const water_Freshwater_Acute_Beryllium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.6839*(log(${hardness}, e))-3.6603)`)
}

const water_Freshwater_Chronic_Beryllium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`e^(1.6839*(log(${hardness}, e))-5.8575}`)
}

const water_Freshwater_Acute_Cadmium__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.0166*(log(${hardness}, e))-3.924)`)
}

const water_Freshwater_Chronic_Cadmium__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.7409*(log(${hardness}, e))-4.719)`)
}

const water_Freshwater_Acute_Cadmium__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 25) {
    return math.evaluate(`exp(1.0166*(log(${hardness}, e))-3.924)`)
  } else {
    return math.evaluate(`exp((1.0166*((${hardness}))-3.924)*(1.136672-0.041838*(log(${hardness}, e))))`)
  }
}

const water_Freshwater_Chronic_Cadmium__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 25) {
    return math.evaluate(`exp(0.7409*(log(${hardness}, e))-4.719)`)
  } else {
    return math.evaluate(`exp((0.7409*(log(${hardness}, e))-4.719)*(1.101672-0.041838*(log(${hardness}, e))))`)
  }
}

const water_Freshwater_Acute_Copper__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.9422*(log(${hardness}, e))-1.700)`)
}

const water_Freshwater_Chronic_Copper__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8545*(log(${hardness}, e))-1.702)`)
}

const water_Freshwater_Acute_Copper__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.96*exp(0.9422*(log(${hardness}, e))-1.700)`)
}

const water_Freshwater_Chronic_Copper__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`96*exp(0.8545*(log(${hardness}, e))-1.702)`)
}

const water_Freshwater_Acute_Lead__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 25) {
    return math.evaluate(`(exp(1.273*(log(${hardness}, e))-1.460)/1000)`)
  } else {
    return math.evaluate(`(1.46203-0.145712*(log(${hardness}, e)))*(exp(1.273*(log(${hardness}, e))-1.460)/1000)`)
  }
}

const water_Freshwater_Chronic_Lead__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 25) {
    return math.evaluate(`(exp(1.273*(log(${hardness}, e))-4.705)/1000)`)
  } else {
    return math.evaluate(`(1.46203-0.145712*(log(${hardness}, e)))*(exp(1.273*(log(${hardness}, e))-4.705)/1000)`)
  }
}

const water_Freshwater_Acute_Lead__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`( exp(1.273*(log(${hardness}, e))-1.460)/1000 )`)
}

const water_Freshwater_Chronic_Lead__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`( exp(1.273*(log(${hardness}, e))-4.705)/1000 )`)
}

const water_Freshwater_Acute_Manganese___CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8784*(log(${hardness}, e))+4.9820)`)
}

const water_Freshwater_Chronic_Manganese___CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8784*(log(${hardness}, e))+3.5199)`)
}

const water_Freshwater_Acute_Silver__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.72*(log(${hardness}, e))-6.52)/2`)
}

const water_Freshwater_Acute_Silver__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.85*exp(1.72*(log(${hardness}, e))-6.59)/2`)
}

const water_Freshwater_Acute_Uranium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if (20 <= hardness && hardness <= 100) {
    return 0.32
  } else if (100 < hardness && hardness <= 210) {
    return 2.3
  }
  return null
}

const water_Freshwater_Chronic_Uranium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if (20 <= hardness && hardness <= 100) {
    return 0.014
  } else if (100 < hardness && hardness <= 210) {
    return 0.1
  }
  return null
}

const water_Freshwater_Acute_Zinc__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Acute_Zinc__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.978*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.986*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Cadmium___CASK = (params) => {
  const hardness = calculateHardness(params)
  if (0 <= hardness && hardness <= 48.5) {
    return 0.017
  } else if (48.5 < hardness && hardness <= 97) {
    return 0.032
  } else if (97 < hardness && hardness <= 194) {
    return 0.058
  } else {
    return 0.1
  }
}

const water_Freshwater_Chronic_Copper___CASK = (params) => {
  const hardness = calculateHardness(params)
  if (0 <= hardness && hardness <= 120) {
    return 2
  } else if (120 < hardness && hardness <= 180) {
    return 3
  } else {
    return 4
  }
}

const water_Freshwater_Chronic_Lead___CASK = (params) => {
  const hardness = calculateHardness(params)
  if (0 <= hardness && hardness <= 60) {
    return 1
  } else if (60 < hardness && hardness <= 120) {
    return 2
  } else if (120 < hardness && hardness <= 180) {
    return 4
  } else {
    return 7
  }
}

const water_Freshwater_Chronic_Nickel___CASK = (params) => {
  const hardness = calculateHardness(params)
  if (0 <= hardness && hardness <= 60) {
    return 25
  } else if (60 < hardness && hardness <= 120) {
    return 65
  } else if (120 < hardness && hardness <= 180) {
    return 110
  } else {
    return 150
  }
}

const water_Freshwater_Acute_Ammonia_asN_Unfiltered_US = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`min(( 0.275/1 + pow(10, 7.204-${pH})) + (39/1+pow(10, ${pH}-7.204)), 0.7249*(0.0114/1+pow(10, 7.204-${pH})) + (1.6181/1+pow(10, ${pH}-7.204))*(23.12*(pow(10, 0.036*(20-${temperature})))) )`)
}

const water_Freshwater_Chronic_Ammonia_asN_Unfiltered_US = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`0.8876*((0.0278/1 + pow(10, 7.688 - ${pH})) + (1.1994/1 + pow(10, ${pH} - 7.688)))*(2.126*(pow(10, 0.028[10 - max(${temperature}, 7))))]`)
}

const water_Freshwater_Acute_Cadmium__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.9789*(log(${hardness}, e))-3.866)`)
}

const water_Freshwater_Chronic_Cadmium__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.7977*(log(${hardness}, e))-3.909)`)
}

const water_Freshwater_Acute_Cadmium__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.9789*(log(${hardness}, e))-3.866)*(1.136672-0.041838*(log(${hardness}, e))))`)
}

const water_Freshwater_Chronic_Cadmium__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.7977*(log(${hardness}, e))-3.909)*(1.101672-0.041838*(log(${hardness}, e)))`)
}

const water_Freshwater_Acute_ChromiumIII__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.819*(log(${hardness}, e))+3.7256)`)
}

const water_Freshwater_Chronic_ChromiumIII__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8190*(log(${hardness}, e))+0.6848)`)
}

const water_Freshwater_Acute_ChromiumIII__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.316*exp(0.819*(log(${hardness}, e))+3.7256)`)
}

const water_Freshwater_Chronic_ChromiumIII__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.86*exp(0.8190*(log(${hardness}, e))+0.6848)`)
}

const water_Freshwater_Acute_Lead__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-1.460)*(1.46203-0.145712*(log(${hardness}, e)))`)
}

const water_Freshwater_Chronic_Lead__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-4.705)*(1.46203-0.145712*(log(${hardness}, e)))`)
}

const water_Freshwater_Acute_Lead__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-1.460)`)
}

const water_Freshwater_Chronic_Lead__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-4.705)`)
}

const water_Freshwater_Acute_Nickel__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.846*(log(${hardness}, e))+2.255)`)
}

const water_Freshwater_Chronic_Nickel__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.846*(log(${hardness}, e))+.0584)`)
}

const water_Freshwater_Acute_Nickel__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.998*exp(0.846*(log(${hardness}, e))+2.255)`)
}

const water_Freshwater_Chronic_Nickel__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.997*exp(0.846*(log(${hardness}, e))+.0584)`)
}

const water_Freshwater_Acute_Pentachlorophenol___US = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`e^(1.005*${pH} - 4.869}`)
}

const water_Freshwater_Chronic_Pentachlorophenol___US = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(1.005*${pH} - 5.134)`)
}

const water_Freshwater_Acute_Silver__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(1.72*(log(${hardness}, e))-6.59)`)
}

const water_Freshwater_Acute_Silver__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.85*exp(1.72*(log(${hardness}, e))-6.59)`)
}

const water_Freshwater_Acute_Zinc__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Total_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Acute_Zinc__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.978*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  return math.evaluate(`0.986*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

module.exports = {
  calculateHardness,
  water_Freshwater_Acute_Copper__Total_CAAB,
  water_Freshwater_Acute_Manganese__Total_CABC,
  water_Freshwater_Chronic_Manganese__Total_CABC,
  water_Freshwater_Chronic_Nickel__Total_CABC,
  water_Freshwater_Acute_Silver__Total_CABC,
  water_Freshwater_Chronic_Silver__Total_CABC,
  water_Freshwater_Acute_Aluminum__Dissolved_CABC,
  water_Freshwater_Chronic_Aluminum__Dissolved_CABC,
  water_Freshwater_Acute_Cadmium__Dissolved_CABC,
  water_Freshwater_Chronic_Cadmium__Dissolved_CABC,
  water_Freshwater_Acute_Fluoride___CABC,
  water_Freshwater_Acute_Lead__Total_CABC,
  water_Freshwater_Chronic_Lead__Total_CABC,
  water_Freshwater_Chronic_Mercury__Total_CABC,
  water_Marine_Chronic_Mercury__Total_CABC,
  water_Freshwater_Acute_Nitrite_asN__CABC,
  water_Freshwater_Chronic_Nitrite_asN__CABC,
  water_Marine_Chronic_pH___CABC,
  water_Marine_Chronic_pHlab___CABC,
  water_Freshwater_Acute_Zinc__Total_CABC,
  water_Freshwater_Chronic_Zinc__Total_CABC,
  water_Freshwater_Acute_Cadmium__Total_CA,
  water_Freshwater_Chronic_Cadmium__Total_CA,
  water_Freshwater_Chronic_Copper__Total_CA,
  water_Freshwater_Chronic_Lead__Total_CA,
  water_Freshwater_Acute_Zinc__Dissolved_CA,
  water_Freshwater_Chronic_Zinc__Dissolved_CA,
  water_Freshwater_Chronic_Aluminum__Total_CA,
  water_Freshwater_Acute_Manganese___CA,
  water_Freshwater_Chronic_Nickel__Total_CA,
  water_Freshwater_Chronic_Ammoniaandammonium_asN_Unfiltered_CA,
  water_Freshwater_Chronic_Ammoniaandammonium_asNH3_Unfiltered_CA,
  water_Freshwater_Chronic_Cobalt__Total_CA,
  water_Freshwater_Chronic_Lead__Dissolved_CA,
  water_Freshwater_Chronic_Iron__Total_CA,
  water_Freshwater_Acute_Cadmium__Dissolved_CAMB,
  water_Freshwater_Chronic_Cadmium__Dissolved_CAMB,
  water_Freshwater_Chronic_Lead___CAON,
  water_Freshwater_Chronic_Beryllium___CAON,
  water_Freshwater_Acute_Dehydroabieticacid___CAON,
  water_Freshwater_Acute_Aceticacid___CAQC,
  water_Freshwater_Chronic_Aceticacid___CAQC,
  water_Freshwater_Acute_Barium___CAQC,
  water_Freshwater_Chronic_Barium___CAQC,
  water_Freshwater_Acute_Beryllium___CAQC,
  water_Freshwater_Chronic_Beryllium___CAQC,
  water_Freshwater_Acute_Cadmium__Total_CAQC,
  water_Freshwater_Chronic_Cadmium__Total_CAQC,
  water_Freshwater_Acute_Cadmium__Dissolved_CAQC,
  water_Freshwater_Chronic_Cadmium__Dissolved_CAQC,
  water_Freshwater_Acute_Copper__Total_CAQC,
  water_Freshwater_Chronic_Copper__Total_CAQC,
  water_Freshwater_Acute_Copper__Dissolved_CAQC,
  water_Freshwater_Chronic_Copper__Dissolved_CAQC,
  water_Freshwater_Acute_Lead__Dissolved_CAQC,
  water_Freshwater_Chronic_Lead__Dissolved_CAQC,
  water_Freshwater_Acute_Lead__Total_CAQC,
  water_Freshwater_Chronic_Lead__Total_CAQC,
  water_Freshwater_Acute_Manganese___CAQC,
  water_Freshwater_Chronic_Manganese___CAQC,
  water_Freshwater_Acute_Silver__Total_CAQC,
  water_Freshwater_Acute_Silver__Dissolved_CAQC,
  water_Freshwater_Acute_Uranium___CAQC,
  water_Freshwater_Chronic_Uranium___CAQC,
  water_Freshwater_Acute_Zinc__Total_CAQC,
  water_Freshwater_Chronic_Zinc__Total_CAQC,
  water_Freshwater_Acute_Zinc__Dissolved_CAQC,
  water_Freshwater_Chronic_Zinc__Dissolved_CAQC,
  water_Freshwater_Chronic_Cadmium___CASK,
  water_Freshwater_Chronic_Copper___CASK,
  water_Freshwater_Chronic_Lead___CASK,
  water_Freshwater_Chronic_Nickel___CASK,
  water_Freshwater_Acute_Ammonia_asN_Unfiltered_US,
  water_Freshwater_Chronic_Ammonia_asN_Unfiltered_US,
  water_Freshwater_Acute_Cadmium__Total_US,
  water_Freshwater_Chronic_Cadmium__Total_US,
  water_Freshwater_Acute_Cadmium__Dissolved_US,
  water_Freshwater_Chronic_Cadmium__Dissolved_US,
  water_Freshwater_Acute_ChromiumIII__Total_US,
  water_Freshwater_Chronic_ChromiumIII__Total_US,
  water_Freshwater_Acute_ChromiumIII__Dissolved_US,
  water_Freshwater_Chronic_ChromiumIII__Dissolved_US,
  water_Freshwater_Acute_Lead__Dissolved_US,
  water_Freshwater_Chronic_Lead__Dissolved_US,
  water_Freshwater_Acute_Lead__Total_US,
  water_Freshwater_Chronic_Lead__Total_US,
  water_Freshwater_Acute_Nickel__Total_US,
  water_Freshwater_Chronic_Nickel__Total_US,
  water_Freshwater_Acute_Nickel__Dissolved_US,
  water_Freshwater_Chronic_Nickel__Dissolved_US,
  water_Freshwater_Acute_Pentachlorophenol___US,
  water_Freshwater_Chronic_Pentachlorophenol___US,
  water_Freshwater_Acute_Silver__Total_US,
  water_Freshwater_Acute_Silver__Dissolved_US,
  water_Freshwater_Acute_Zinc__Total_US,
  water_Freshwater_Chronic_Zinc__Total_US,
  water_Freshwater_Acute_Zinc__Dissolved_US,
  water_Freshwater_Chronic_Zinc__Dissolved_US
}
