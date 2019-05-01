// TODO add in math.js to ensure no round-off errors

/**
 * Harness
 *
 * TH/CaCO3 {Numeric} `Total hardness` / `Hardness, Ca, Mg` in units mg/L
 * CH {Numeric} `Hardness, carbonate` aka Temporary Hardness in units mg/L
 * NCH {Numeric} `Hardness, non-carbonate` aka Permanent Hardness in units mg/L
 * PsH {Numeric} `??` aka Pseudo Hardness in units mg/L
 * Ca {Numeric} `Hardness, Calcium` in units mg/L
 * Mg {Numeric} `Hardness, magnesium` in units mg/L
 * CaIon {Numeric} `Calcium` in units mg/L
 * MgIon {Numeric} `Magnesium` in units mg/L
 */
const calculateHardness = ({TH, CaCO3, CH, NCH, Ca, Mg, CaIon, MgIon}) => {
  if (TH || CaCO3) {
    return TH || CaCO3
  } else if (Ca && Mg) {
    return Ca + Mg
  } else if (CaIon && MgIon) {
    return 2.497 * CaIon + 4.118 * MgIon
  } else if (CH && NCH) {
    return CH + NCH
  }
  return null
}

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
  if (hardness < 5.3) {
    return 0.11
  } else if (360 < hardness) {
    return 7.7
  } else {
    // 10^(1.016(log*(hardness))-1.71)
    return Math.pow(10, (1.016 * Math.LOG10E * hardness - 1.71))
  }
}

const cadmiumChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (0 < hardness && hardness < 17) {
    return 0.04
  } else if (280 < hardness) {
    return 0.37
  } else {
    // 10^(0.83(log*(hardness))-2.46)
    return Math.pow(10, (0.83 * Math.LOG10E * hardness - 2.46))
  }
}

const copperChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 82) {
    return 2
  } else if (180 < hardness) {
    return 4
  } else {
    // 0.2*EXP(0.8545*(ln(hardness))-1.465)
    return 0.2 * Math.exp(0.8545 * Math.log1p(hardness) - 1.465)
  }
}

const leadChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness <= 60) {
    return 1
  } else if (180 < hardness) {
    return 7
  } else {
    // EXP(1.273(ln(hardness))-4.705)
    return Math.exp(1.273 * Math.log1p(hardness) - 4.705)
  }
}

const nickelChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness <= 60) {
    return 25
  } else if (180 < hardness) {
    return 150
  } else {
    // EXP(0.76*(ln(hardness))+1.06)
    return Math.exp(0.76 * Math.log1p(hardness) + 1.06)
  }
}

const zincAcuteCA = (params) => {
  const hardness = calculateHardness(params)
  const {DOC} = params
  if (13.8 <= hardness && hardness <= 250.5 && 0.3 <= DOC && DOC <= 17.3) {
    // EXP(0.833*(ln(hardness))+0.240*(DOC)+0.526);
    return Math.exp(0.833 * Math.log1p(hardness) + 0.240 * DOC + 0.526)
  } else {
    return 37
  }
}

const zincChronicCA = (params) => {
  const hardness = calculateHardness(params)
  const {pH, DOC} = params
  if (23.4 <= hardness && hardness <= 399 && 0.3 <= DOC && DOC <= 22.9 && 6.5 <= pH && pH <= 8.13) {
    // EXP(0.947*(ln(hardness))-0.815*(pH)+0.398*(ln(DOC))+4.625)
    return Math.exp(0.947 * Math.log1p(hardness) - 0.815 * pH + 0.398 * Math.log1p(DOC) + 4.625)
  } else {
    return 7
  }
}

// US: US EPA
const cadmiumAcuteUS = () => {
  // EXP(.9789*LN(hardness)-3.866)*(1.136672-(LN(hardness)*(.041838)))
}

const cadmiumChronicUS = () => {
  // EXP(.7977*(LN(hardness))-3.909)*(1.101672-(LN(hardness)*(.041838)))
}

const chromium3AcuteUS = () => {
  // EXP*(0.819*LN(hardness)+3.7256)*0.316
}

const chromium3ChronicUS = () => {
  // EXP(.8190*(LN(hardness))+.6848)+.86
}

const leadAcuteUS = () => {
  // EXP(1.273*(LN(hardness))-1.460)*(1.46203-(LN(hardness)*(.145712)))
}

const leadChronicUS = () => {
  // EXP(1.273*(LN(hardness))-4.705)*(1.46203-(LN(hardness))*(.145712))
}

const nickelAcuteUS = () => {
  // EXP(.846*(LN(hardness))+2.255)*(.998)
}

const nickelChronicUS = () => {
  // EXP(.846*(LN(hardness))+.0584)*(.997)
}

const pentachlorophenolAcuteUS = ({pH}) => {
  // table lookup
}

const pentachlorophenolChronicUS = ({pH}) => {
  // table lookup
}

const silverAcuteUS = () => {
  // EXP(1.72*(LN(hardness))-6.59)*(.85)
}

const zincAcuteUS = () => {
  // EXP(.8473*(LN(hardness))+.884)*(.978)
}

const zincChronicUS = () => {
  // EXP(.8473*(LN(hardness))+.884)*(.986)
}

module.exports = {
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
  // US: US EPA
  cadmiumAcuteUS,
  cadmiumChronicUS,
  chromium3AcuteUS,
  chromium3ChronicUS,
  leadAcuteUS,
  leadChronicUS,
  nickelAcuteUS,
  nickelChronicUS,
  silverAcuteUS,
  zincAcuteUS,
  zincChronicUS
}
