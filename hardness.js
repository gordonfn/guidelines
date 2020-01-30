const { create, all } = require('mathjs')
const math = create(all)
math.config({
  number: 'BigNumber',
  precision: 64        // Number of significant digits for BigNumbers
})
// Docs: https://mathjs.org/docs/reference/functions.html

/**
 * Harness
 *
 * TH {Numeric} `Total hardness` in units mg/L
 * CaCO3 {Numeric} `Hardness, Ca, Mg` in units mg/L
 * CH {Numeric} `Hardness, carbonate` aka Temporary Hardness in units mg/L
 * NCH {Numeric} `Hardness, non-carbonate` aka Permanent Hardness in units mg/L
 * PsH {Numeric} `??` aka Pseudo Hardness in units mg/L
 * Ca {Numeric} `Hardness, Calcium` in units mg/L
 * Mg {Numeric} `Hardness, magnesium` in units mg/L
 * CaIon {Numeric} `Calcium` in units mg/L
 * MgIon {Numeric} `Magnesium` in units mg/L
 */
const calculate = (params) => {
  const { TH, CaCO3, CH, NCH, Ca, Mg, CaIon, MgIon } = params
  if (!isNaN(TH)) {
    return TH
  } else if (!isNaN(CaCO3)) {
    return CaCO3
  } else if (!isNaN(Ca) && !isNaN(Mg)) {
    return math.evaluate(`${Ca} + ${Mg}`).toNumber()
  } else if (!isNaN(CaIon) && !isNaN(MgIon)) {
    return math.evaluate(`2.497 * ${CaIon} + 4.118 * ${MgIon}`).toNumber()
  } else if (!isNaN(CH) && !isNaN(NCH)) {
    return math.evaluate(`${CH} + ${NCH}`).toNumber()
  }
  return null
}

module.exports = calculate
