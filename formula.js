const math = require('./math')

const calculateHardness = require('./hardness')

const freshwater_Aluminum__Total_CA_Chronic = ({ pH }) => {
  if (!math.isValid(pH)) return null
  if (pH < 6.5) {
    return 5
  } else if (6.5 <= pH) {
    return 100
  }
}

const freshwater_Ammonia_asN_Unfiltered_US_Acute = ({ pH, temperature }) => {
  if (!math.isValid(pH) || !math.isValid(temperature)) return null

  // MIN({0.275/[1+10^(7.204-ph)]}+{39/[1+10^(ph-7.204)]}, 0.7249*{0.0114/[1+10^(7.204-ph)]+1.6181/[1+10^(ph-7.204)]}*{23.12*10^[0.036*(20-T)]})
  return math.evaluate(`min( (0.275 / (1 + pow(10, (7.204 - ${pH})))) + (39 / (1 + pow(10, (${pH} - 7.204)) )), 0.7249 * (0.0114 / (1 + pow(10, (7.204 - ${pH}))) + 1.6181 / (1 + pow(10, ( ${pH} - 7.204)))) * (23.12 * pow(10, (0.036 * (20 - ${temperature})))) )`).toNumber()
}

const freshwater_Ammonia_asN_Unfiltered_US_Chronic = ({ pH, temperature }) => {
  if (!math.isValid(pH) || !math.isValid(temperature)) return null
  // 0.8876*{0.0278/[1+10^(7.688-pH)]+1.1994/[1+10^(pH-7.688)]}*{2.126*10^[0.028*(10-MAX(T,7))]}
  return math.evaluate(`0.8876 * (0.0278 / (1 + pow(10, (7.688 - ${pH}))) + 1.1994 / (1 + pow(10, (${pH} - 7.688)))) * (2.126 * pow(10, (0.028 * (10 - max(${temperature}, 7)))))`).toNumber()
}

const freshwater_Ammoniaandammonium_asN_Unfiltered_CA_Chronic = ({ pH, temperature }) => {
  if (!math.isValid(pH) || !math.isValid(temperature)) return null
  // (0.019/(1/(10^((0.0901821+2729.92/(T(°C)+273.15))-pH)+1)*0.8223 //*1.216
  return math.evaluate(`(0.019 / (1 / ( pow(10,(0.0901821 + 2729.92 / (${temperature} + 273.15)) - ${pH}) + 1))) * 0.8224`).toNumber()
}

const freshwater_Ammoniaandammonium_asNH3_Unfiltered_CA_Chronic = ({ pH, temperature }) => {
  if (!math.isValid(pH) || !math.isValid(temperature)) return null
  // (0.019/(1/(10^((0.0901821+2729.92/(T(°C)+273.15))-pH)+1)
  return math.evaluate(`(0.019 / (1 / ( pow(10,(0.0901821 + 2729.92 / (${temperature} + 273.15)) - ${pH}) + 1)))`).toNumber()
}

const freshwater_Cadmium__Total_CA_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness)) return null
  if (hardness < 5.3) {
    return 0.11
  } else if (360 < hardness) {
    return 7.7
  } else {
    // 10^(1.016(log*(hardness))-1.71)
    return math.evaluate(`pow(10, (1.016 * log(${hardness}, 10) - 1.71))`).toNumber()
  }
}

const freshwater_Cadmium__Total_CA_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  if (0 < hardness && hardness < 17) {
    return 0.04
  } else if (280 < hardness) {
    return 0.37
  } else {
    // 10^(0.83(log*(hardness))-2.46)
    return math.evaluate(`pow(10, (0.83 * log(${hardness}, 10) - 2.46))`).toNumber()
  }
}

const freshwater_Cadmium__Dissolved_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.9789*LN(hardness)-3.866) * (1.136672-(LN(hardness)*(.041838)))
  return math.evaluate(`exp(.9789 * log(${hardness}, e) - 3.866 ) * ( 1.136672 - log(${hardness}, e) * 0.041838)`).toNumber()
}

const freshwater_Cadmium__Dissolved_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.7977*(LN(hardness))-3.909)*(1.101672-(LN(hardness)*(.041838)))
  return math.evaluate(`exp(0.7977 * log(${hardness}, e) - 3.909 ) * ( 1.101672 - log(${hardness}, e) * 0.041838)`).toNumber()
}

const freshwater_Cadmium__Total_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.9789*LN(hardness)-3.866)
  return math.evaluate(`exp(.9789 * log(${hardness}, e) - 3.866 )`).toNumber()
}

const freshwater_Cadmium__Total_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.7977*(LN(hardness))-3.909)
  return math.evaluate(`exp(0.7977 * log(${hardness}, e) - 3.909 )`).toNumber()
}

const freshwater_ChromiumIII__Dissolved_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP*(0.819*LN(hardness)+3.7256)*0.316
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 3.7256 ) * 0.316`).toNumber()
}

const freshwater_ChromiumIII__Dissolved_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.8190*(LN(hardness))+.6848)*.86
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 0.6848 ) * 0.86`).toNumber()
}

const freshwater_ChromiumIII__Total_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP*(0.819*LN(hardness)+3.7256)
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 3.7256 )`).toNumber()
}

const freshwater_ChromiumIII__Total_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.8190*(LN(hardness))+.6848)
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 0.6848 )`).toNumber()
}

const freshwater_Cobalt__Total_CA_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // if (hardness ≥ 52 and ≤ 396) {EXP((0.414(ln(hardness))-1.887)}
  if (52 <= hardness && hardness <= 396) {
    return math.evaluate(`exp(0.414 * log(${hardness}, e) - 1.887 )`).toNumber()
  }
  return null
}

const freshwater_Copper__Total_CA_Chronic = (params) => {
  const hardness = calculateHardness(params)
  // If the hardness is unknown, the CWQG is 2 µg/L
  if (!math.isValid(hardness) || hardness < 82) {
    return 2
  } else if (180 < hardness) {
    return 4
  } else {
    // 0.2*EXP(0.8545*(ln(hardness))-1.465)
    return math.evaluate(`0.2 * exp(0.8545 * log(${hardness}, e) - 1.465)`).toNumber()
  }
}

const freshwater_Iron__Total_CA_Chronic = ({ DOC, pH }) => {
  if (!math.isValid(DOC) || !math.isValid(pH)) return null
  // EXP(0.671(LN(DOC))+0.171(pH)+5.586)
  return math.evaluate(`exp(0.671 * log(${DOC}, e) + 0.171 * ${pH} + 5.586)`).toNumber()
}

const freshwater_Lead__Dissolved_CA_Chronic = ({ DOC, pH }) => {
  if (!math.isValid(DOC) || !math.isValid(pH)) return null
  // EXP(0.684(LN(DOC))+0.924(pH)-7.323)
  return math.evaluate(`exp(0.684 * log(${DOC}, e) + 0.924 * ${pH} - 7.323)`).toNumber()
}

const freshwater_Lead__Dissolved_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(1.273*(LN(hardness))-1.460)*(1.46203-(LN(hardness)*(.145712)))
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 1.460 ) * ( 1.46203 - log(${hardness}, e) * 0.145712)`).toNumber()
}

const freshwater_Lead__Dissolved_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(1.273*(LN(hardness))-4.705)*(1.46203-(LN(hardness))*(.145712))
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 4.705 ) * ( 1.46203 - log(${hardness}, e) * 0.145712)`).toNumber()
}

const freshwater_Lead__Total_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(1.273*(LN(hardness))-1.460)
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 1.460 )`).toNumber()
}

const freshwater_Lead__Total_CA_Chronic = (params) => {
  const hardness = calculateHardness(params)
  // If the hardness is unknown, the CWQG is 1 µg/L
  if (!math.isValid(hardness) || hardness <= 60) {
    return 1
  } else if (180 < hardness) {
    return 7
  } else {
    // EXP(1.273*ln(hardness)-4.705)
    return math.evaluate(`exp(1.273 * log(${hardness}, e) - 4.705)`).toNumber()
  }
}

const freshwater_Lead__Total_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(1.273*(LN(hardness))-4.705)
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 4.705 )`).toNumber()
}

const freshwater_Manganese___CA_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(0.878(LN(hardness))+4.76
  return math.evaluate(`exp(0.878 * log(${hardness}, e) + 4.76 )`).toNumber()
}

const freshwater_Nickel__Dissolved_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.846*(LN(hardness))+2.255)*(.998)
  return math.evaluate(`exp(0.846 * log(${hardness}, e) + 2.255 ) * 0.998`).toNumber()
}

const freshwater_Nickel__Dissolved_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.846*(LN(hardness))+.0584)*(.997)
  return math.evaluate(`exp(0.846 * log(${hardness}, e) + 0.0584 ) * 0.997`).toNumber()
}

const freshwater_Nickel__Total_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.846*(LN(hardness))+2.255)
  return math.evaluate(`exp(0.846 * log(${hardness}, e) + 2.255 )`).toNumber()
}

const freshwater_Nickel__Total_CA_Chronic = (params) => {
  const hardness = calculateHardness(params)
  // If the hardness is unknown, the CWQG is 25 µg/L
  if (!math.isValid(hardness) || hardness <= 60) {
    return 25
  } else if (180 < hardness) {
    return 150
  } else {
    // EXP(0.76*(ln(hardness))+1.06)
    return math.evaluate(`exp(0.76 * log(${hardness}, e) + 1.06)`).toNumber()
  }
}

const freshwater_Nickel__Total_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.846*(LN(hardness))+.0584)
  return math.evaluate(`exp(0.846 * log(${hardness}, e) + 0.0584 )`).toNumber()
}

const freshwater_Pentachlorophenol___US_Acute = ({ pH }) => {
  if (!math.isValid(pH)) return null
  // EXP(1.005*pH - 4.869)
  return math.evaluate(`exp(1.005 * ${pH} - 4.869 )`).toNumber()
}

const freshwater_Pentachlorophenol___US_Chronic = ({ pH }) => {
  if (!math.isValid(pH)) return null
  // EXP(1.005*pH - 5.134)
  return math.evaluate(`exp(1.005 * ${pH} - 5.134 )`).toNumber()
}

const freshwater_Silver__Dissolved_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(1.72*(LN(hardness))-6.59)*(.85)
  return math.evaluate(`exp(1.72 * log(${hardness}, e) - 6.59 ) * 0.85`).toNumber()
}

const freshwater_Silver__Total_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(1.72*(LN(hardness))-6.59)
  return math.evaluate(`exp(1.72 * log(${hardness}, e) - 6.59 )`).toNumber()
}

const freshwater_Zinc__Dissolved_CA_Acute = (params) => {
  const hardness = calculateHardness(params)
  const { DOC } = params
  if (!math.isValid(hardness) || hardness <= 0 || !math.isValid(DOC)) {
    return null
  }

  if (13.8 <= hardness && hardness <= 250.5 && 0.3 <= DOC && DOC <= 17.3) {
    // EXP(0.833*(ln(hardness))+0.240*(DOC)+0.526);
    return math.evaluate(`exp(0.833 * log(${hardness}, e) + 0.24 * ${DOC} + 0.5260)`).toNumber()
  }
  return 37
}

const freshwater_Zinc__Dissolved_CA_Chronic = (params) => {
  const hardness = calculateHardness(params)
  const { pH, DOC } = params
  if (!math.isValid(hardness) || hardness <= 0 || !math.isValid(pH) || !math.isValid(DOC)) {
    return null
  }

  if (23.4 <= hardness && hardness <= 399 && 0.3 <= DOC && DOC <= 22.9 && 6.5 <= pH && pH <= 8.13) {
    // EXP(0.947*(ln(hardness))-0.815*(pH)+0.398*(ln(DOC))+4.625)
    return math.evaluate(`exp(0.947 * log(${hardness}, e) - 0.815 * ${pH} + 0.398 * log(${DOC}, e) + 4.625)`).toNumber()
  }
  return 7
}

const freshwater_Zinc__Dissolved_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.8473*(LN(hardness))+.884)*(.978)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 ) * 0.978`).toNumber()
}

const freshwater_Zinc__Dissolved_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.8473*(LN(hardness))+.884)*(.986)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 ) * 0.986`).toNumber()
}

const freshwater_Zinc__Total_US_Acute = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.8473*(LN(hardness))+.884)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 )`).toNumber()
}

const freshwater_Zinc__Total_US_Chronic = (params) => {
  const hardness = calculateHardness(params)
  if (!math.isValid(hardness) || hardness <= 0) return null
  // EXP(.8473*(LN(hardness))+.884)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 )`).toNumber()
}

module.exports = {
  calculateHardness,

  // freshwater_Aceticacid___CAQC_Acute ,
  // freshwater_Aceticacid___CAQC_Chronic ,
  // freshwater_Aldrin___US_Chronic ,
  // freshwater_Aluminum__Dissolved_CABC_Acute ,
  // freshwater_Aluminum__Dissolved_CABC_Chronic ,
  freshwater_Aluminum__Total_CA_Chronic,
  freshwater_Ammonia_asN_Unfiltered_US_Acute,
  freshwater_Ammonia_asN_Unfiltered_US_Chronic,
  freshwater_Ammoniaandammonium_asN_Unfiltered_CA_Chronic,
  freshwater_Ammoniaandammonium_asNH3_Unfiltered_CA_Chronic,
  // freshwater_Barium___CAQC_Acute ,
  // freshwater_Barium___CAQC_Chronic ,
  // freshwater_Beryllium___CAON_Chronic ,
  // freshwater_Beryllium___CAQC_Acute ,
  // freshwater_Beryllium___CAQC_Chronic ,
  // freshwater_Cadmium__Dissolved_CABC_Acute ,
  // freshwater_Cadmium__Dissolved_CABC_Chronic ,
  freshwater_Cadmium__Total_CA_Acute,
  freshwater_Cadmium__Total_CA_Chronic,
  // freshwater_Cadmium__Dissolved_CAMB_Acute ,
  // freshwater_Cadmium__Dissolved_CAMB_Chronic ,
  // freshwater_Cadmium__Total_CAQC_Acute ,
  // freshwater_Cadmium__Total_CAQC_Chronic ,
  // freshwater_Cadmium__Dissolved_CAQC_Acute ,
  // freshwater_Cadmium__Dissolved_CAQC_Chronic ,
  // freshwater_Cadmium___CASK_Chronic ,
  freshwater_Cadmium__Total_US_Acute,
  freshwater_Cadmium__Total_US_Chronic,
  freshwater_Cadmium__Dissolved_US_Acute,
  freshwater_Cadmium__Dissolved_US_Chronic,
  // freshwater_Chloroform___CA_Acute ,
  // freshwater_Chlorophenol___CA_Acute ,
  freshwater_ChromiumIII__Total_US_Acute,
  freshwater_ChromiumIII__Total_US_Chronic,
  freshwater_ChromiumIII__Dissolved_US_Acute,
  freshwater_ChromiumIII__Dissolved_US_Chronic,
  freshwater_Cobalt__Total_CA_Chronic,
  // freshwater_Copper__Total_CAAB_Acute ,
  freshwater_Copper__Total_CA_Chronic,
  // freshwater_Copper___CASK_Chronic ,
  // freshwater_Copper__Total_US_Acute ,
  // freshwater_Copper__Total_US_Chronic ,
  // freshwater_Copper__Dissolved_US_Acute ,
  // freshwater_Copper__Dissolved_US_Chronic ,
  // freshwater_Copper__Total_CAQC_Acute ,
  // freshwater_Copper__Total_CAQC_Chronic ,
  // freshwater_Copper__Dissolved_CAQC_Acute ,
  // freshwater_Copper__Dissolved_CAQC_Chronic ,
  // freshwater_Dehydroabieticacid___CAON_Acute ,
  // freshwater_Fluoride___CABC_Acute ,
  freshwater_Iron__Total_CA_Chronic,
  // freshwater_Lead__Total_CABC_Acute ,
  // freshwater_Lead__Total_CABC_Chronic ,
  freshwater_Lead__Total_CA_Chronic,
  // marine_Lead__Total_CA_Acute ,
  freshwater_Lead__Dissolved_CA_Chronic,
  // freshwater_Lead___CAON_Chronic ,
  // freshwater_Lead__Total_CAQC_Acute ,
  // freshwater_Lead__Total_CAQC_Chronic ,
  // freshwater_Lead__Dissolved_CAQC_Acute ,
  // freshwater_Lead__Dissolved_CAQC_Chronic ,
  // freshwater_Lead___CASK_Chronic ,
  freshwater_Lead__Total_US_Acute,
  freshwater_Lead__Total_US_Chronic,
  freshwater_Lead__Dissolved_US_Acute,
  freshwater_Lead__Dissolved_US_Chronic,
  // freshwater_Lindane___US_Chronic ,
  // freshwater_Manganese__Total_CABC_Acute ,
  // freshwater_Manganese__Total_CABC_Chronic ,
  freshwater_Manganese___CA_Acute,
  // freshwater_Manganese___CAQC_Acute ,
  // freshwater_Manganese___CAQC_Chronic ,
  // freshwater_Mercury__Total_CABC_Chronic ,
  // freshwater_Nickel__Total_CABC_Chronic ,
  freshwater_Nickel__Total_CA_Chronic,
  // freshwater_Nickel___CASK_Chronic ,
  freshwater_Nickel__Total_US_Acute,
  freshwater_Nickel__Total_US_Chronic,
  freshwater_Nickel__Dissolved_US_Acute,
  freshwater_Nickel__Dissolved_US_Chronic,
  // freshwater_Nitrite_asN__CABC_Acute ,
  // freshwater_Nitrite_asN__CABC_Chronic ,
  freshwater_Pentachlorophenol___US_Acute,
  freshwater_Pentachlorophenol___US_Chronic,
  // freshwater_Silver__Total_CABC_Acute ,
  // freshwater_Silver__Total_CABC_Chronic ,
  // freshwater_Silver__Total_CAQC_Acute ,
  // freshwater_Silver__Dissolved_CAQC_Acute ,
  // freshwater_Silver__Dissolved_CAQC_Chronic ,
  freshwater_Silver__Total_US_Acute,
  // freshwater_Silver__Total_US_Chronic ,
  freshwater_Silver__Dissolved_US_Acute,
  // freshwater_Silver__Dissolved_US_Chronic ,
  // marine_TotalPCBs___US_Acute ,
  // freshwater_Uranium___CAQC_Acute ,
  // freshwater_Uranium___CAQC_Chronic ,
  // freshwater_Zinc__Total_CABC_Acute ,
  // freshwater_Zinc__Total_CABC_Chronic ,
  freshwater_Zinc__Dissolved_CA_Acute,
  freshwater_Zinc__Dissolved_CA_Chronic,
  // marine_Zinc__Dissolved_CA_Acute ,
  // marine_Zinc__Dissolved_CA_Chronic ,
  // freshwater_Zinc__Total_CAQC_Acute ,
  // freshwater_Zinc__Total_CAQC_Chronic ,
  // freshwater_Zinc__Dissolved_CAQC_Acute ,
  // freshwater_Zinc__Dissolved_CAQC_Chronic ,
  freshwater_Zinc__Total_US_Acute,
  freshwater_Zinc__Total_US_Chronic,
  freshwater_Zinc__Dissolved_US_Acute,
  freshwater_Zinc__Dissolved_US_Chronic,
}
