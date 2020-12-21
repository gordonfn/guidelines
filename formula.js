
/* This page is generated during the build process. */
const math = require('./math')
const calculateHardness = require('./hardness')

const water_Freshwater_Acute_Copper__Total_CAAB = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`1000*exp(0.979123*log(${hardness}, e)-8.64497)`)
}

const water_Freshwater_Acute_Manganese__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (25 < hardness && hardness < 259) {
    return math.evaluate(`0.01102*${hardness} + 0.54`)*1000
  }
  return null
}

const water_Freshwater_Chronic_Manganese__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (37 < hardness && hardness < 450) {
    return math.evaluate(`0.0044*${hardness} + 0.605`)*1000
  }
  return null
}

const water_Freshwater_Chronic_Nickel__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <=  hardness <= 60) {
    return 25
  } else if (60 < hardness && hardness <= 180) {
    return math.evaluate(`exp(0.76*log(${hardness}, e)+1.06)`)
  } else if (180 < hardness)  {
    return 150
  } 
  return null
}

const water_Freshwater_Acute_Silver__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 100) {
    return 0.1
  } else if (100 < hardness) {
    return 3.0
  }
  return null
}

const water_Freshwater_Chronic_Silver__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 100) {
    return 0.05
  } else if (100 < hardness) {
    return 1.5
  }
  return null
}

const water_Freshwater_Acute_Aluminum__Dissolved_CABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH < 6.5) {
    return math.evaluate(`exp(1.209 - 2.426*${pH} + 0.286*pow(${pH}, 2))`)*1000
  } else if (6.5 <= pH && pH <= 14) {
    return 0.1*1000
  }
  return null
}

const water_Freshwater_Chronic_Aluminum__Dissolved_CABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH < 6.5) {
    return math.evaluate(`exp(1.6 - 3.327*${pH} + 0.402*pow(${pH}, 2))`)*1000
  } else if (6.5 <= pH && pH <= 14) {
    return 0.05*1000
  }
  return null
}

const water_Freshwater_Acute_Cadmium__Dissolved_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (7 < hardness && hardness < 455) {
    return math.evaluate(`exp(1.03*log(${hardness}, e)-5.274)`)
  }
  return null
}

const water_Freshwater_Chronic_Cadmium__Dissolved_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (3.4 < hardness && hardness < 285) {
    return math.evaluate(`exp(0.736*log(${hardness}, e)-4.943)`)
  }
  return null
}

const water_Freshwater_Acute_Fluoride___CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 10) {
    return 0.4*1000
  } else if (10 < hardness && hardness < 385) {
    return math.evaluate(`0.01*(-51.73+92.57*log(${hardness}))`)*1000
  }
  return null
}

const water_Freshwater_Acute_Lead__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0  <= hardness && hardness <= 8) {
    return 3
  } else if (8 < hardness && hardness < 360) {
    return math.evaluate(`exp(1.273*log(${hardness}, e)-1.460)`)
  }
  return null
}

const water_Freshwater_Chronic_Lead__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (8 < hardness && hardness < 360) {
    return math.evaluate(`exp(1.273*log(${hardness}, e)-4.705)`)
  }
  return null
}

const water_Freshwater_Chronic_Mercury__Total_CABC = (params) => {
  const { MeHg, Hg } = params
  if ( !math.isValid(MeHg) || !math.isValid(Hg) ) { return null }
  if (0  <= MeHg && MeHg <= 0.005*Hg) {
    return 0.02
  } else if (0.005*Hg < MeHg)  {
    return math.evaluate(`((0.0001)/(((${MeHg})/(${Hg}))))`)
  }
  return null
}

const water_Marine_Chronic_Mercury__Total_CABC = (params) => {
  const { MeHg, Hg } = params
  if ( !math.isValid(MeHg) || !math.isValid(Hg) ) { return null }
  if (0  <= MeHg && MeHg <= 0.005*Hg) {
    return 0.02
  } else if (0.005*Hg < MeHg)  {
    return math.evaluate(`((0.0001)/(((${MeHg})/(${Hg}))))`)
  }
  return null
}

const water_Freshwater_Acute_Nitrite_asN__CABC = (params) => {
  const { Cl } = params
  if ( !math.isValid(Cl) ) { return null }
  if (0 <= Cl && Cl <= 2) {
    return 0.06
  } else if (2 < Cl && Cl <= 4) {
    return 0.12
  } else if (4 < Cl && Cl <= 6) {
    return 0.18
  } else if (6 < Cl && Cl <= 8) {
    return 0.24
  } else if (8 < Cl && Cl <= 10) {
    return 0.30
  } else if (10 < Cl) {
    return 0.60
  }
  return null
}

const water_Freshwater_Chronic_Nitrite_asN__CABC = (params) => {
  const { Cl } = params
  if ( !math.isValid(Cl) ) { return null }
  if (0 <= Cl && Cl <= 2) {
    return 0.02
  } else if (2 < Cl && Cl <= 4) {
    return 0.04
  } else if (4 < Cl && Cl <= 6) {
    return 0.06
  } else if (6 < Cl && Cl <= 8) {
    return 0.08
  } else if (8 < Cl && Cl <= 10) {
    return 0.10
  } else if (10 < Cl) {
    return 0.20
  }
  return null
}

const water_Freshwater_Acute_Zinc__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 90) {
    return 33
  } else if (90 < hardness && hardness < 500) {
    return math.evaluate(`33+0.75*(${hardness}-90)`)
  }
  return null
}

const water_Freshwater_Chronic_Zinc__Total_CABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 90) {
    return 7.5
  } else if (90 < hardness && hardness < 330) {
    return math.evaluate(`7.5+0.75*(${hardness}-90)`)
  } 
  return null
}

const water_Freshwater_Acute_Cadmium__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 5.3) {
    return 0.11
  } else if (5.3 <= hardness && hardness <= 360) {
    return math.evaluate(`pow(10, 1.016*(log(${hardness}))-1.71)`)
  } else if (360 < hardness) {
    return 7.7
  } 
  return null
}

const water_Freshwater_Chronic_Cadmium__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 17) {
    return 0.04
  } else if (17 <= hardness && hardness <= 280) {
    return math.evaluate(`pow(10, 0.83*(log(${hardness}))-2.46)`)
  } else if (280 < hardness) {
    return 0.37
  } 
  return null
}

const water_Freshwater_Chronic_Copper__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 82) {
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
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 60) {
    return 1
  } else if (60 < hardness && hardness <= 180) {
    return math.evaluate(`exp(1.273*(log(${hardness}, e))-4.705)`)
  } else if (180 < hardness) {
    return 7
  } 
  return null
}

const water_Freshwater_Acute_Zinc__Dissolved_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  const { DOC } = params
  if ( !math.isValid(DOC) ) { return null }
  if (0.3 <= DOC && DOC <= 17.3 && 13.8 <= hardness && hardness <= 250.5) {
    return math.evaluate(`exp(0.833*(log(${hardness}, e))+0.240*${DOC}+0.526)`)
  }
  return null
}

const water_Freshwater_Chronic_Zinc__Dissolved_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  const { pH, DOC } = params
  if ( !math.isValid(pH) || !math.isValid(DOC) ) { return null }
  if (0.3 <= DOC && DOC <= 22.9 && 23.4 <= hardness && hardness <= 399 && 6.5 <= pH && pH <= 8.13) {
    return math.evaluate(`exp(0.947*(log(${hardness}, e))-0.815*${pH}+0.398*(log(${DOC}, e))+4.625)`)
  }
  return null
}

const water_Freshwater_Chronic_Aluminum__Total_CA = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH < 6.5) {
    return 5
  } else if (6.5 <= pH && pH <= 14) {
    return 100
  }
  return null
}

const water_Freshwater_Acute_Manganese___CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.878*(log(${hardness}, e))+4.76)`)
}

const water_Freshwater_Chronic_Nickel__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 60) {
    return 25
  } else if (60 < hardness && hardness < 180) {
    return math.evaluate(`exp(0.76*(log(${hardness}, e))+1.06)`)
  } else if (180 <= hardness) {
    return 150
  }
  return null
}

const water_Freshwater_Chronic_Ammoniaandammonium_asN_Unfiltered_CA = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`0.8224{1 \over 10^{(0.0901821+((2729.92)/(${temperature} +273.15))) - ${pH}}+1}`)
}

const water_Freshwater_Chronic_Ammoniaandammonium_asNH3_Unfiltered_CA = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`{1 \over 10^{(0.0901821+((2729.92)/(${temperature} + 273.15))) - ${pH}}+1}`)
}

const water_Freshwater_Chronic_Cobalt__Total_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (52 <= hardness && hardness <= 396) {
    return math.evaluate(`exp(0.414*(log(${hardness}, e))-1.887)`)
  }
  return null
}

const water_Freshwater_Chronic_Lead__Dissolved_CA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
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
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.0166*(log(${hardness}, e)-3.924)*(1.136672-0.041838*(log(${hardness}, e)))`)
}

const water_Freshwater_Chronic_Cadmium__Dissolved_CAMB = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.7409*(log(${hardness}, e))-4.719)*(1.101672-0.041838*(log(${hardness}, e)))`)
}

const water_Freshwater_Chronic_Lead___CAON = (params) => {
  const { alkalinity } = params
  if ( !math.isValid(alkalinity) ) { return null }
  if (0 <= alkalinity && alkalinity < 20) {
    return 5
  } else if (20 <= alkalinity && alkalinity < 40) {
    return 10
  } else if (40 <= alkalinity && alkalinity < 80) {
    return 20
  } else if (80 <= alkalinity) {
    return 25
  }
  return null
}

const water_Freshwater_Chronic_Beryllium___CAON = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 75) {
    return 11
  } else if (75 <= hardness) {
    return 1100
  }
  return null
}

const water_Freshwater_Acute_Dehydroabieticacid___CAON = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH <= 5) {
    return 1*0.001
  } else if (5 < pH && pH <= 6) {
    return 2*0.001
  } else if (6 < pH && pH <= 6.5) {
    return 4*0.001
  } else if (6.5 < pH && pH <= 7) {
    return 8*0.001
  } else if (7 < pH && pH <= 7.5) {
    return 12*0.001
  } else if (7.5 < pH && pH <= 8) {
    return 13*0.001
  } else if (8 < pH && pH <= 14) {
    return 14*0.001
  }
  return null
}

const water_Freshwater_Acute_Aceticacid___CAQC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(0.2732*(${pH})+9.2333)`)*1000
}

const water_Freshwater_Chronic_Aceticacid___CAQC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(0.2732*(${pH})+7.0362)`)*1000
}

const water_Freshwater_Acute_Barium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.0629*(log(${hardness}, e))+2.2354)`)
}

const water_Freshwater_Chronic_Barium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.0629*(log(${hardness}, e))+1.1869)`)
}

const water_Freshwater_Acute_Beryllium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.6839*(log(${hardness}, e))-3.6603)`)
}

const water_Freshwater_Chronic_Beryllium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.6839*(log(${hardness}, e))-5.8575)`)
}

const water_Freshwater_Acute_Cadmium__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.0166*(log(${hardness}, e))-3.924) \over 1000`)*1000
}

const water_Freshwater_Chronic_Cadmium__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.7409*(log(${hardness}, e))-4.719) \over 1000`)*1000
}

const water_Freshwater_Acute_Cadmium__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(1.0166*(log(${hardness}, e))-3.924))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(((exp(1.0166*(log(${hardness}, e))-3.924))/(1000)))*(1.136672-0.041838*(log(${hardness}, e)))`)*1000
  }
  return null
}

const water_Freshwater_Chronic_Cadmium__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(0.7409*(log(${hardness}, e))-4.719))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(((exp(0.7409*(log(${hardness}, e))-4.719))/(1000)))*(1.101672-0.041838*(log(${hardness}, e)))`)*1000
  }
  return null
}

const water_Freshwater_Acute_Copper__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.9422*(log(${hardness}, e))-1.700) \over 1000`)*1000
}

const water_Freshwater_Chronic_Copper__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8545*(log(${hardness}, e))-1.702) \over 1000`)*1000
}

const water_Freshwater_Acute_Copper__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.96*exp(0.9422*(log(${hardness}, e))-1.700) \over 1000`)*1000
}

const water_Freshwater_Chronic_Copper__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.96*exp(0.8545*(log(${hardness}, e))-1.702) \over 1000`)*1000
}

const water_Freshwater_Acute_Lead__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(1.273*(log(${hardness}, e))-1.460))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(1.46203-0.145712*(log(${hardness}, e)))*((exp(1.273*(log(${hardness}, e))-1.460))/(1000))`)*1000
  }
  return null
}

const water_Freshwater_Chronic_Lead__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(1.273*(log(${hardness}, e))-4.705))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(1.46203-0.145712*(log(${hardness}, e)))*((exp(1.273*(log(${hardness}, e))-4.705))/(1000))`)*1000
  }
  return null
}

const water_Freshwater_Acute_Lead__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`(( exp(1.273*(log(${hardness}, e))-1.460))/(1000 ))`)*1000
}

const water_Freshwater_Chronic_Lead__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`(( exp(1.273*(log(${hardness}, e))-4.705))/(1000 ))`)*1000
}

const water_Freshwater_Acute_Manganese___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8784*(log(${hardness}, e))+4.9820)`)
}

const water_Freshwater_Chronic_Manganese___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8784*(log(${hardness}, e))+3.5199)`)
}

const water_Freshwater_Acute_Silver__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((exp(1.72*(log(${hardness}, e))-6.52))/(2))`)
}

const water_Freshwater_Acute_Silver__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((0.85*exp(1.72*(log(${hardness}, e))-6.59))/(2))`)
}

const water_Freshwater_Acute_Uranium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (20 <= hardness && hardness <= 100) {
    return 0.32*1000
  } else if (100 < hardness && hardness <= 210) {
    return 2.3*1000
  }
  return null
}

const water_Freshwater_Chronic_Uranium___CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (20 <= hardness && hardness <= 100) {
    return 0.014*1000
  } else if (100 < hardness && hardness <= 210) {
    return 0.1*1000
  }
  return null
}

const water_Freshwater_Acute_Zinc__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Total_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Acute_Zinc__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.978*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Dissolved_CAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.986*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Cadmium___CASK = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 48.5) {
    return 0.017
  } else if (48.5 < hardness && hardness <= 97) {
    return 0.032
  } else if (97 < hardness && hardness <= 194) {
    return 0.058
  } else if (194 < hardness) {
    return 0.1
  }
  return null
}

const water_Freshwater_Chronic_Copper___CASK = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 120) {
    return 2
  } else if (120 < hardness && hardness <= 180) {
    return 3
  } else if (180 < hardness) {
    return 4
  }
  return null
}

const water_Freshwater_Chronic_Lead___CASK = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 60) {
    return 1
  } else if (60 < hardness && hardness <= 120) {
    return 2
  } else if (120 < hardness && hardness <= 180) {
    return 4
  } else if (180 < hardness) {
    return 7
  }
  return null
}

const water_Freshwater_Chronic_Nickel___CASK = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 60) {
    return 25
  } else if (60 < hardness && hardness <= 120) {
    return 65
  } else if (120 < hardness && hardness <= 180) {
    return 110
  } else if (180 < hardness) {
    return 150
  }
  return null
}

const water_Freshwater_Acute_Ammonia_asN_Unfiltered_US = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`min((( 0.275)/(1 + pow(10, 7.204-${pH}))) + ((39)/(1+pow(10, ${pH}-7.204))), 0.7249*((0.0114)/(1+pow(10, 7.204-${pH}))) + ((1.6181)/(1+pow(10, ${pH}-7.204)))*(23.12*(pow(10, 0.036*(20-${temperature})))) )`)
}

const water_Freshwater_Chronic_Ammonia_asN_Unfiltered_US = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`0.8876*(((0.0278)/(1 + pow(10, 7.688 - ${pH}))) + ((1.1994)/(1 + pow(10, ${pH} - 7.688))))*(2.126*(pow(10, 0.028*(10 - max(${temperature}, 7)))))`)
}

const water_Freshwater_Acute_Cadmium__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.9789*(log(${hardness}, e))-3.866)`)
}

const water_Freshwater_Chronic_Cadmium__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.7977*(log(${hardness}, e))-3.909)`)
}

const water_Freshwater_Acute_Cadmium__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.9789*(log(${hardness}, e))-3.866)*(1.136672-0.041838*(log(${hardness}, e))))`)
}

const water_Freshwater_Chronic_Cadmium__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.7977*(log(${hardness}, e))-3.909)*(1.101672-0.041838*(log(${hardness}, e)))`)
}

const water_Freshwater_Acute_ChromiumIII__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.819*(log(${hardness}, e))+3.7256)`)
}

const water_Freshwater_Chronic_ChromiumIII__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8190*(log(${hardness}, e))+0.6848)`)
}

const water_Freshwater_Acute_ChromiumIII__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.316*exp(0.819*(log(${hardness}, e))+3.7256)`)
}

const water_Freshwater_Chronic_ChromiumIII__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.86*exp(0.8190*(log(${hardness}, e))+0.6848)`)
}

const water_Freshwater_Acute_Lead__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-1.460)*(1.46203-0.145712*(log(${hardness}, e)))`)
}

const water_Freshwater_Chronic_Lead__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-4.705)*(1.46203-0.145712*(log(${hardness}, e)))`)
}

const water_Freshwater_Acute_Lead__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-1.460)`)
}

const water_Freshwater_Chronic_Lead__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273*(log(${hardness}, e))-4.705)`)
}

const water_Freshwater_Acute_Nickel__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.846*(log(${hardness}, e))+2.255)`)
}

const water_Freshwater_Chronic_Nickel__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.846*(log(${hardness}, e))+.0584)`)
}

const water_Freshwater_Acute_Nickel__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.998*exp(0.846*(log(${hardness}, e))+2.255)`)
}

const water_Freshwater_Chronic_Nickel__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.997*exp(0.846*(log(${hardness}, e))+.0584)`)
}

const water_Freshwater_Acute_Pentachlorophenol___US = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(1.005*${pH} - 4.869)`)
}

const water_Freshwater_Chronic_Pentachlorophenol___US = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(1.005*${pH} - 5.134)`)
}

const water_Freshwater_Acute_Silver__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.72*(log(${hardness}, e))-6.59)`)
}

const water_Freshwater_Acute_Silver__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.85*exp(1.72*(log(${hardness}, e))-6.59)`)
}

const water_Freshwater_Acute_Zinc__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Total_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Acute_Zinc__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.978*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

const water_Freshwater_Chronic_Zinc__Dissolved_US = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.986*exp(0.8473*(log(${hardness}, e))+0.884)`)
}

module.exports = {
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
