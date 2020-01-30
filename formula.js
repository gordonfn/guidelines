const math = require('mathjs')
// Docs: https://mathjs.org/docs/reference/functions.html

const calculateHardness = require('./hardness')

// CA: CCME
const aluminumTotalFreshwaterChronicCA = ({pH}) => {
  if (pH < 6.5) {
    return 5
  } else if (6.5 <= pH) {
    return 100
  } else {
    return null
  }
}

const cadmiumTotalFreshwaterAcuteCA = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  if (hardness < 5.3) {
    return 0.11
  } else if (360 < hardness) {
    return 7.7
  } else {
    // 10^(1.016(log*(hardness))-1.71)
    return math.evaluate(`pow(10, (1.016 * log(${hardness}, 10) - 1.71))`)
  }
}

const cadmiumTotalFreshwaterChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  if (0 < hardness && hardness < 17) {
    return 0.04
  } else if (280 < hardness) {
    return 0.37
  } else {
    // 10^(0.83(log*(hardness))-2.46)
    return math.evaluate(`pow(10, (0.83 * log(${hardness}, 10) - 2.46))`)
  }
}

const copperTotalFreshwaterChronicCA = (params) => {
  const hardness = calculateHardness(params)
  // If the hardness is unknown, the CWQG is 2 µg/L
  if (isNaN(hardness) || hardness < 82) {
    return 2
  } else if (180 < hardness) {
    return 4
  } else {
    // 0.2*EXP(0.8545*(ln(hardness))-1.465)
    return math.evaluate(`0.2 * exp(0.8545 * log(${hardness}, e) - 1.465)`)
  }
}

const leadTotalFreshwaterChronicCA = (params) => {
  const hardness = calculateHardness(params)
  // If the hardness is unknown, the CWQG is 1 µg/L
  if (isNaN(hardness) || hardness <= 60) {
    return 1
  } else if (180 < hardness) {
    return 7
  } else {
    // EXP(1.273*ln(hardness)-4.705)
    return math.evaluate(`exp(1.273 * log(${hardness}, e) - 4.705)`)
  }
}

const nickelTotalFreshwaterChronicCA = (params) => {
  const hardness = calculateHardness(params)
  // If the hardness is unknown, the CWQG is 25 µg/L
  if (isNaN(hardness) || hardness <= 60) {
    return 25
  } else if (180 < hardness) {
    return 150
  } else {
    // EXP(0.76*(ln(hardness))+1.06)
    return math.evaluate(`exp(0.76 * log(${hardness}, e) + 1.06)`)
  }
}

const zincDissolvedFreshwaterAcuteCA = (params) => {
  const hardness = calculateHardness(params)
  const {DOC} = params
  if (isNaN(hardness)|| isNaN(DOC)) {
    return 37
  } else if (13.8 <= hardness && hardness <= 250.5 && 0.3 <= DOC && DOC <= 17.3) {
    // EXP(0.833*(ln(hardness))+0.240*(DOC)+0.526);
    return math.evaluate(`exp(0.833 * log(${hardness}, e) + 0.24 * ${DOC} + 0.5260)`)
  } else {
    return 37
  }
}

const zincDissolvedFreshwaterChronicCA = (params) => {
  const hardness = calculateHardness(params)
  const {pH, DOC} = params
  if (isNaN(hardness) || isNaN(pH) || isNaN(DOC)) {
    return 7
  } else if (23.4 <= hardness && hardness <= 399 && 0.3 <= DOC && DOC <= 22.9 && 6.5 <= pH && pH <= 8.13) {
    // EXP(0.947*(ln(hardness))-0.815*(pH)+0.398*(ln(DOC))+4.625)
    return math.evaluate(`exp(0.947 * log(${hardness}, e) - 0.815 * ${pH} + 0.398 * log(${DOC}, e) + 4.625)`)
  } else {
    return 7
  }
}

// US: US EPA

const ammoniaFreshwaterAcuteUS = (params) => {
  const {pH, temperature} = params
  if (isNaN(pH) || isNaN(temperature)) return null

  // MIN({0.275/[1+10^(7.204-ph)]}+{39/[1+10^(ph-7.204)]}, 0.7249*{0.0114/[1+10^(7.204-ph)]+1.6181/[1+10^(ph-7.204)]}*{23.12*10^[0.036*(20-T)]})
  return math.evaluate(`min( (0.275 / (1 + pow(10, (7.204 - ${pH})))) + (39 / (1 + pow(10, (${pH} - 7.204)) )), 0.7249 * (0.0114 / (1 + pow(10, (7.204 - ${pH}))) + 1.6181 / (1 + pow(10, ( ${pH} - 7.204)))) * (23.12 * pow(10, (0.036 * (20 - ${temperature})))) )`)
}

const ammoniaFreshwaterChronicUS = (params) => {
  const {pH, temperature} = params
  if (isNaN(pH) || isNaN(temperature)) return null
  // 0.8876*{0.0278/[1+10^(7.688-pH)]+1.1994/[1+10^(pH-7.688)]}*{2.126*10^[0.028*(10-MAX(T,7))]}
  return math.evaluate(`0.8876 * (0.0278 / (1 + pow(10, (7.688 - ${pH}))) + 1.1994 / (1 + pow(10, (${pH} - 7.688)))) * (2.126 * pow(10, (0.028 * (10 - max(${temperature}, 7)))))`)
}

const cadmiumTotalFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.9789*LN(hardness)-3.866)
  return math.evaluate(`exp(.9789 * log(${hardness}, e) - 3.866 )`)
}

const cadmiumDissolvedFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.9789*LN(hardness)-3.866) * (1.136672-(LN(hardness)*(.041838)))
  return math.evaluate(`exp(.9789 * log(${hardness}, e) - 3.866 ) * ( 1.136672 - log(${hardness}, e) * 0.041838)`)
}

const cadmiumTotalFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.7977*(LN(hardness))-3.909)
  return math.evaluate(`exp(0.7977 * log(${hardness}, e) - 3.909 )`)
}

const cadmiumDissolvedFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.7977*(LN(hardness))-3.909)*(1.101672-(LN(hardness)*(.041838)))
  return math.evaluate(`exp(0.7977 * log(${hardness}, e) - 3.909 ) * ( 1.101672 - log(${hardness}, e) * 0.041838)`)
}

const chromiumiiiTotalFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP*(0.819*LN(hardness)+3.7256)
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 3.7256 )`)
}

const chromiumiiiDissolvedFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP*(0.819*LN(hardness)+3.7256)*0.316
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 3.7256 ) * 0.316`)
}

const chromiumiiiTotalFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.8190*(LN(hardness))+.6848)
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 0.6848 )`)
}

const chromiumiiiDissolvedFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.8190*(LN(hardness))+.6848)*.86
  return math.evaluate(`exp(0.819 * log(${hardness}, e) + 0.6848 ) * 0.86`)
}

const leadTotalFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(1.273*(LN(hardness))-1.460)
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 1.460 )`)
}

const leadDissolvedFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(1.273*(LN(hardness))-1.460)*(1.46203-(LN(hardness)*(.145712)))
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 1.460 ) * ( 1.46203 - log(${hardness}, e) * 0.145712)`)
}

const leadTotalFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(1.273*(LN(hardness))-4.705)
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 4.705 )`)
}

const leadDissolvedFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(1.273*(LN(hardness))-4.705)*(1.46203-(LN(hardness))*(.145712))
  return math.evaluate(`exp(1.273 * log(${hardness}, e) - 4.705 ) * ( 1.46203 - log(${hardness}, e) * 0.145712)`)
}

const nickelTotalFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.846*(LN(hardness))+2.255)
  return math.evaluate(`exp(0.846 * log(${hardness}, e) + 2.255 )`)
}

const nickelDissolvedFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.846*(LN(hardness))+2.255)*(.998)
  return math.evaluate(`exp(0.846 * log(${hardness}, e) + 2.255 ) * 0.998`)
}

const nickelTotalFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.846*(LN(hardness))+.0584)
  return math.evaluate(`exp(0.846 * log(${hardness}, e) + 0.0584 )`)
}

const nickelDissolvedFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.846*(LN(hardness))+.0584)*(.997)
  return math.evaluate(`exp(0.846 * log(${hardness}) + 0.0584 ) * 0.997`)
}

const pentachlorophenolFreshwaterAcuteUS = (params) => {
  const {pH} = params
  return math.evaluate(`log(1.005 * ${pH} - 4.869)`)
}

const pentachlorophenolFreshwaterChronicUS = (params) => {
  const {pH} = params
  return math.evaluate(`log(1.005 * ${pH} - 5.134)`)
}

const silverTotalFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(1.72*(LN(hardness))-6.59)
  return math.evaluate(`exp(1.72 * log(${hardness}, e) - 6.59 )`)
}

const silverDissolvedFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(1.72*(LN(hardness))-6.59)*(.85)
  return math.evaluate(`exp(1.72 * log(${hardness}, e) - 6.59 ) * 0.85`)
}

const zincTotalFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.8473*(LN(hardness))+.884)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 )`)
}

const zincDissolvedFreshwaterAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.8473*(LN(hardness))+.884)*(.978)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 ) * 0.978`)
}

const zincTotalFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.8473*(LN(hardness))+.884)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 )`)
}

const zincDissolvedFreshwaterChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (isNaN(hardness)) return null
  // EXP(.8473*(LN(hardness))+.884)*(.986)
  return math.evaluate(`exp(0.8473 * log(${hardness}, e) + 0.884 ) * 0.986`)
}

module.exports = {
  calculateHardness,
  // CA: CCME
  aluminumTotalFreshwaterChronicCA,
  cadmiumTotalFreshwaterAcuteCA,
  cadmiumTotalFreshwaterChronicCA,
  copperTotalFreshwaterChronicCA,
  leadTotalFreshwaterChronicCA,
  nickelTotalFreshwaterChronicCA,
  zincDissolvedFreshwaterAcuteCA,
  zincDissolvedFreshwaterChronicCA,
  // CA-AB

  // CA-BC

  // US: US EPA
  ammoniaFreshwaterAcuteUS,
  ammoniaFreshwaterChronicUS,
  cadmiumTotalFreshwaterAcuteUS,
  cadmiumTotalFreshwaterChronicUS,
  cadmiumDissolvedFreshwaterAcuteUS,
  cadmiumDissolvedFreshwaterChronicUS,
  chromiumiiiTotalFreshwaterAcuteUS,
  chromiumiiiTotalFreshwaterChronicUS,
  chromiumiiiDissolvedFreshwaterAcuteUS,
  chromiumiiiDissolvedFreshwaterChronicUS,
  leadTotalFreshwaterAcuteUS,
  leadTotalFreshwaterChronicUS,
  leadDissolvedFreshwaterAcuteUS,
  leadDissolvedFreshwaterChronicUS,
  nickelTotalFreshwaterAcuteUS,
  nickelTotalFreshwaterChronicUS,
  nickelDissolvedFreshwaterAcuteUS,
  nickelDissolvedFreshwaterChronicUS,
  pentachlorophenolFreshwaterAcuteUS,
  pentachlorophenolFreshwaterChronicUS,
  silverTotalFreshwaterAcuteUS,
  silverDissolvedFreshwaterAcuteUS,
  zincTotalFreshwaterAcuteUS,
  zincTotalFreshwaterChronicUS,
  zincDissolvedFreshwaterAcuteUS,
  zincDissolvedFreshwaterChronicUS,
}
