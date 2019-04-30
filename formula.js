

/**
 * Harness
 *
 * Ca Numeric in units mg/L
 * Mg Numeric in units mg/L
 */
const calculateHardness = ({Ca, Mg}) => {
  return 2.497 * Ca + 4.118 * Mg
}


// CA: CCME
export const aluminumChronicCA = ({pH}) => {
 if (pH < 6.5) {
   return 5
 } else if (6.5 <= pH) {
   return 100
 }
}

export const cadmiumAcuteCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 5.3) {
    return 0.11
  } else if (360 < hardness) {
    return 7.7
  } else {
    // 10^(1.016(log*(hardness))-1.71)
    return Math.pow(10, (1.016*Math.log(hardness)-1.71))
  }
}

export const cadmiumChronicCA = (parmas) => {
  const hardness = calculateHardness(params)
  if (0 < hardness && hardness < 17) {
    return 0.04
  } else if (280 < hardness) {
    return 0.37
  } else {
    // 10^(0.83(log*(hardness))-2.46)
    return Math.pow(10, (0.83*Math.log(hardness)-2.46))
  }
}

export const copperChronicCA = (params) => {
  const hardness = calculateHardness(params)
  if (hardness < 82) {
    return 2
  } else if (180 < hardness) {
    return 4
  } else {
    // 0.2*EXP(0.8545*(ln(hardness))-1.465)
    return  0.2 * Math.exp(0.8545 * Math.log1p(hardness) - 1.465)
  }
}

export const leadChronicCA = (params) => {
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

export const nickelChronicCA = (params) => {
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

export const zincAcuteCA = (params) => {
  const hardness = calculateHardness(params)
  const {DOC} = params
  if (13.8 <= hardness && hardness <= 250.5 && 0.3 <= DOC && DOC <= 17.3) {
    // EXP(0.833*(ln(hardness))+0.240*(DOC)+0.526);
    return Math.exp(0.833 * Math.log1p(hardness) + 0.240 * DOC + 0.526)
  } else {
    return 37
  }
}

export const zincChronicCA = (params) => {
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
export const cadmiumAcuteUS = () => {
  
}

export const cadmiumChronicUS = () => {

}

export const chromium3AcuteUS = () => {

}

export const chromium3ChronicUS = () => {

}

export const leadAcuteUS = () => {

}

export const leadChronicUS = () => {

}

export const nickelAcuteUS = () => {

}

export const nickelChronicUS = () => {

}

export const silverAcuteUS = () => {

}

export const zincAcuteUS = () => {

}

export const zincChronicUS = () => {

}
