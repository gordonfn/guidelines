const math = require('mathjs')
math.config({
  number: 'BigNumber',
  precision: 64        // Number of significant digits for BigNumbers
})
// Docs: https://mathjs.org/docs/reference/functions.html

const convertUnits = require('./units')
const calculateHardness = require('./hardness')

// CA: CCME
const aluminumChronicCA = ({pH}) => {
  if (pH < 6.5) {
    return 5
  } else if (6.5 <= pH) {
    return 100
  }
}

const cadmiumAcuteCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  if (hardness < 5.3) {
    return 0.11
  } else if (360 < hardness) {
    return 7.7
  } else {
    // 10^(1.016(log*(hardness))-1.71)
    return math.eval(`pow(10, (1.016 * log10(${hardness}) - 1.71))`).toNumber()
  }
}

const cadmiumChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  if (0 < hardness && hardness < 17) {
    return 0.04
  } else if (280 < hardness) {
    return 0.37
  } else {
    // 10^(0.83(log*(hardness))-2.46)
    return math.eval(`pow(10, (0.83 * log10(${hardness}) - 2.46))`).toNumber()
  }
}

const copperChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  if (hardness < 82) {
    return 2
  } else if (180 < hardness) {
    return 4
  } else {
    // 0.2*EXP(0.8545*(ln(hardness))-1.465)
    return math.eval(`0.2 * exp(0.8545 * log1p(${hardness}) - 1.465)`).toNumber()
    //return 0.2 * Math.exp(0.8545 * Math.log1p(hardness) - 1.465)
  }
}

const leadChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  if (hardness <= 60) {
    return 1
  } else if (180 < hardness) {
    return 7
  } else {
    // EXP(1.273*ln(hardness)-4.705)
    return math.eval(`exp(1.273 * log1p(${hardness}) - 4.705)`).toNumber()
  }
}

const nickelChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  if (hardness <= 60) {
    return 25
  } else if (180 < hardness) {
    return 150
  } else {
    // EXP(0.76*(ln(hardness))+1.06)
    return math.eval(`exp(0.76 * log1p(${hardness}) + 1.06)`).toNumber()
  }
}

const zincAcuteCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  const {DOC} = params
  if (13.8 <= hardness && hardness <= 250.5 && 0.3 <= DOC && DOC <= 17.3) {
    // EXP(0.833*(ln(hardness))+0.240*(DOC)+0.526);
    return math.eval(`exp(0.833 * log1p(${hardness}) + 0.24 * ${DOC} + 0.5260)`).toNumber()
  } else {
    return 37
  }
}

const zincChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  const {pH, DOC} = params
  if (23.4 <= hardness && hardness <= 399 && 0.3 <= DOC && DOC <= 22.9 && 6.5 <= pH && pH <= 8.13) {
    // EXP(0.947*(ln(hardness))-0.815*(pH)+0.398*(ln(DOC))+4.625)
    return math.eval(`exp(0.947 * log1p(${hardness}) - 0.815 * ${pH} + 0.398 * log1p(${DOC}) + 4.625)`).toNumber()
  } else {
    return 7
  }
}

// US: US EPA
const alkalinitytotalChronicUS = (params) => {
  // need formula
}

const cadmiumAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(.9789*LN(hardness)-3.866) * (1.136672-(LN(hardness)*(.041838)))
  return math.eval(`exp(0.9789 * log1p(${hardness}) - 3.866 ) * ( 1.136672 - log1p(${hardness}) * 0.041838)`).toNumber()
}

const cadmiumChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(.7977*(LN(hardness))-3.909)*(1.101672-(LN(hardness)*(.041838)))
  return math.eval(`exp(0.7977 * log1p(${hardness}) - 3.909 ) * ( 1.101672 - log1p(${hardness}) * 0.041838)`).toNumber()
}

const chromiumIIIAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP*(0.819*LN(hardness)+3.7256)*0.316
  return math.eval(`exp(0.819 * log1p(${hardness}) + 3.7256 ) * 0.316`).toNumber()
}

const chromiumIIIChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(.8190*(LN(hardness))+.6848)+.86
  return math.eval(`exp(0.819 * log1p(${hardness}) + 0.6848 ) * 0.86`).toNumber()
}

const leadAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(1.273*(LN(hardness))-1.460)*(1.46203-(LN(hardness)*(.145712)))
  return math.eval(`exp(1.273 * log1p(${hardness}) - 1.460 ) * ( 1.46203 - log1p(${hardness}) * 0.145712)`).toNumber()
}

const leadChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(1.273*(LN(hardness))-4.705)*(1.46203-(LN(hardness))*(.145712))
  return math.eval(`exp(1.273 * log1p(${hardness}) - 4.705 ) * ( 1.46203 - log1p(${hardness}) * 0.145712)`).toNumber()
}

const nickelAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(.846*(LN(hardness))+2.255)*(.998)
  return math.eval(`exp(0.846 * log1p(${hardness}) + 2.255 ) * 0.998`).toNumber()
}

const nickelChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(.846*(LN(hardness))+.0584)*(.997)
  return math.eval(`exp(0.846 * log1p(${hardness}) + 0.0584 ) * 0.997`).toNumber()
}

const pentachlorophenolAcuteUS = (params) => {
  // table lookup
}

const pentachlorophenolChronicUS = (params) => {
  // table lookup
}

const silverAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(1.72*(LN(hardness))-6.59)*(.85)
  return math.eval(`exp(1.72 * log1p(${hardness}) - 6.59 ) * 0.85`).toNumber()
}

const zincAcuteUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(.8473*(LN(hardness))+.884)*(.978)
  return math.eval(`exp(0.8473 * log1p(${hardness}) + 0.884 ) * 0.978`).toNumber()
}

const zincChronicUS = (params) => {
  const hardness = calculateHardness(params)
  if (hardness === null) return null
  // EXP(.8473*(LN(hardness))+.884)*(.986)
  return math.eval(`exp(0.8473 * log1p(${hardness}) + 0.884 ) * 0.986`).toNumber()
}

module.exports = {
  convertUnits,
  calculateHardness,
  // CA: CCME
  aluminumChronicCA,
  cadmiumAcuteCA,
  cadmiumChronicCA,
  copperChronicCA,
  leadChronicCA,
  nickelChronicCA,
  zincAcuteCA,
  zincChronicCA,
  // CA-AB

  // CA-BC

  // US: US EPA
  alkalinitytotalChronicUS,
  cadmiumAcuteUS,
  cadmiumChronicUS,
  chromiumIIIAcuteUS,
  chromiumIIIChronicUS,
  leadAcuteUS,
  leadChronicUS,
  nickelAcuteUS,
  nickelChronicUS,
  pentachlorophenolAcuteUS,
  pentachlorophenolChronicUS,
  silverAcuteUS,
  zincAcuteUS,
  zincChronicUS
}
