
/* This page is generated during the build process. */
const math = require('@gordonfn/normalize/lib/math')
const calculateHardness = require('./hardness')

const waterFreshwaterAcuteCopperTotalApprovedCAAB = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`1000*exp(0.979123*log(${hardness}, e)-8.64497)`)
}

const waterFreshwaterChronicAlkalinityWorkingCABC = (params) => {
  const { DCa } = params
  if ( !math.isValid(DCa) ) { return null }
  if (DCa < 4) {
    return 10
  } else if (4 <= DCa && DCa <= 8) {
    return [10,20]
  } else if (8 < DCa) {
    return 20
  }
  return null
}

const waterFreshwaterAcuteAluminumDissolvedApprovedCABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH < 6.5) {
    return math.evaluate(`e^(1.209 - 2.426*${pH} + 0.286*pow(${pH}, 2))`)*1000
  } else if (6.5 <= pH && pH <= 14) {
    return 0.1*1000
  }
  return null
}

const waterFreshwaterChronicAluminumDissolvedApprovedCABC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH < 6.5) {
    return math.evaluate(`e^(1.6 - 3.327*${pH} + 0.402*pow(${pH}, 2))`)*1000
  } else if (6.5 <= pH && pH <= 14) {
    return 0.05*1000
  }
  return null
}

const waterFreshwaterAcuteAmmoniaAsNApprovedCABC = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  if (0 <= temperature && temperature <= 20 && 6.5 <= pH && pH <8) {
    return math.evaluate(`(0.52/(10^(0.03*(20-${temperature})))/((1+10^(7.4-${pH}))/1.25)/2*0.822)*100)/(1/(10^((0.09018+2729.92/(273.2+${temperature}))-${pH})+1)*100`)
  } else if (0 <= temperature && temperature <= 20 && 8 <= pH && pH <= 9) {
    return math.evaluate(`(0.52/(10^(0.03*(20-${temperature})))/2*0.822)*100)/(1/(10^((0.09018+2729.92/(273.2+${temperature}))-${pH})+1)*100`)
  } else if (temperature <= 20 && pH < 6.5) {
    return 23.8
  } else if (temperature <= 20 && 9 < pH && pH <= 14) {
    return 0.752
  } else if (20 < temperature) {
    return null
  }
  return null
}

const waterFreshwaterChronicAmmoniaAsNApprovedCABC = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  if (0 <= temperature && temperature < 15 && 6.5 <= pH && pH < 7.7) {
    return math.evaluate(`0.8/(10^(0.03*(20-${temperature})))/((1+10^(7.4-${pH}))/1.25)/((24*10^(7.7-${pH}))/(1+10^(7.4-${pH})))*0.822*100)/(1/(10^((0.09018+2729.92/(273.2+${temperature}))-${pH})+1)*100`)
  } else if (0 <= temperature && temperature < 15 && 7.7 <= pH && pH < 8) {
    return math.evaluate(`0.8/(10^(0.03*(20-${temperature})))/((1+10^(7.4-${pH}))/1.25)/16*0.822*100)/(1/(10^((0.09018+2729.92/(273.2+${temperature}))-${pH})+1)*100`)
  } else if (0 <= temperature && temperature < 15 && 8 <= pH && pH <= 9) {
    return math.evaluate(`0.8/(10^(0.03*(20-Temp)))/16*0.822*100)/(1/(10^((0.09018+2729.92/(273.2+${temperature}))-${pH})+1)*100`)
  } else if (15 <= temperature && temperature < 20 && 6.5  <= pH && pH < 7.7) {
    return math.evaluate(`0.8/1.14/((1+10^(7.4-${pH}))/1.25)/((24*10^(7.7-${pH}))/(1+10^(7.4-${pH})))*0.822*100)/(1/(10^((0.09018+2729.92/(273.2+Temp))-${pH})+1)*100`)
  } else if (15 <= temperature && temperature < 20 && 7.7 <= pH && pH < 8) {
    return math.evaluate(`0.8/1.14/((1+10^(7.4-${pH}))/1.25)/16*0.822*100)/(1/(10^((0.09018+2729.92/(273.2+${temperature}))-${pH})+1)*100`)
  } else if (15 <= temperature && temperature <20 && 8 <= pH && pH <= 9) {
    return math.evaluate(`0.8/1.14/16*0.822*100)/(1/(10^((0.09018+2729.92/(273.2+${temperature}))-${pH})+1)*100`)
  } else if (temperature  <= 20 && pH < 6.5) {
    return 1.21
  } else if (temperature <= 20 && 9 < pH && pH <= 14) {
    return 0.102
  } else if (20 < temperature) {
    return null
  } 
  return null
}

const waterFreshwaterAcuteAmmoniaAsNUnfilteredApprovedUS = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`min((( 0.275)/(1 + pow(10, 7.204-${pH}))) + ((39)/(1+pow(10, ${pH}-7.204))), 0.7249*((0.0114)/(1+pow(10, 7.204-${pH}))) + ((1.6181)/(1+pow(10, ${pH}-7.204)))*(23.12(pow(10, 0.036*(20-${temperature})))) )`)
}

const waterFreshwaterChronicAmmoniaAsNUnfilteredApprovedUS = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`0.8876 (((0.0278)/(1 + pow(10, 7.688 - ${pH}))) + ((1.1994)/(1 + pow(10, ${pH} - 7.688))))(2.126*(pow(10, 0.028(10 - max(${temperature}, 7)))))`)
}

const waterFreshwaterAcuteCadmiumDissolvedApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (hardness <= 7) {
    return 0.02
  } else if (7 < hardness && hardness < 455) {
    return math.evaluate(`exp(1.03*log(${hardness}, e)-5.274)`)
  } else if (455 < hardness) {
    return 2.8
  }
  return null
}

const waterFreshwaterChronicCadmiumDissolvedApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (hardness <= 3.4) {
    return 0.02
  } else if (3.4 < hardness && hardness < 285) {
    return math.evaluate(`exp(0.736*log(${hardness}, e)-4.943)`)
  } else if (285 < hardness) {
    return 0.46
  }
  return null
}

const waterFreshwaterChronicAluminumTotalApprovedCA = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (0 <= pH && pH < 6.5) {
    return 5
  } else if (6.5 <= pH && pH <= 14) {
    return 100
  }
  return null
}

const waterMarineChronicChlorideDissolvedApprovedCABC = (params) => {
  const { DCl } = params
  if ( !math.isValid(DCl) ) { return null }
  return [math.evaluate(`0.9*(${DCl})`),math.evaluate(`1.1*(${DCl})`)]
}

const waterFreshwaterChronicAmmoniaandammoniumAsNH3UnfilteredApprovedCA = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`((1)/(pow(10, (0.0901821+((2729.92)/(${temperature} + 273.15))) - ${pH})+1))`)
}

const waterFreshwaterChronicApparentColourApprovedCABC = (params) => {
  const { apparentcolor } = params
  if ( !math.isValid(apparentcolor) ) { return null }
  return math.evaluate(`0.8*(${apparentcolor})`)
}

const waterFreshwaterAcuteCadmiumDissolvedApprovedCAMB = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.0166(log(${hardness}, e)-3.924)(1.136672-0.041838(log(${hardness}, e))))`)
}

const waterFreshwaterChronicCadmiumDissolvedApprovedCAMB = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.7409(log(${hardness}, e))-4.719)*(1.101672-0.041838(log(${hardness}, e)))`)
}

const waterFreshwaterAcuteCadmiumTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.9789(log(${hardness}, e))-3.866)`)
}

const waterFreshwaterChronicCadmiumTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.7977(log(${hardness}, e))-3.909)`)
}

const waterFreshwaterAcuteCadmiumDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.9789(log(${hardness}, e))-3.866)*(1.136672-0.041838(log(${hardness}, e)))`)
}

const waterFreshwaterChronicCadmiumDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.7977(log(${hardness}, e))-3.909)*(1.101672-0.041838(log(${hardness}, e)))`)
}

const waterFreshwaterAcuteFluorideInterimCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 10) {
    return 0.4*1000
  } else if (10 < hardness && hardness < 385) {
    return math.evaluate(`0.01(-51.73+92.57*log(${hardness}))`)*1000
  }
  return null
}

const waterFreshwaterAcuteLeadApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0  <= hardness && hardness <= 8) {
    return 3
  } else if (8 < hardness && hardness < 360) {
    return math.evaluate(`exp(1.273*log(${hardness}, e)-1.460)`)
  }
  return null
}

const waterFreshwaterChronicLeadApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (8 < hardness && hardness < 360) {
    return math.evaluate(`exp(1.273*log(${hardness}, e)-4.705)`)
  }
  return null
}

const waterFreshwaterAcuteManganeseApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (25 < hardness && hardness < 259) {
    return math.evaluate(`0.01102*${hardness} + 0.54`)*1000
  }
  return null
}

const waterFreshwaterChronicManganeseApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (37 < hardness && hardness < 450) {
    return math.evaluate(`0.0044*${hardness} + 0.605`)*1000
  }
  return null
}

const waterFreshwaterChronicMercuryApprovedCABC = (params) => {
  const { MeHg, Hg } = params
  if ( !math.isValid(MeHg) || !math.isValid(Hg) ) { return null }
  if (0  <= MeHg && MeHg <= 0.005*Hg) {
    return 0.02
  } else if (0.005*Hg < MeHg)  {
    return math.evaluate(`((0.0001)/(((${MeHg})/(${Hg}))))`)
  }
  return null
}

const waterMarineChronicMercuryApprovedCABC = (params) => {
  const { MeHg, Hg } = params
  if ( !math.isValid(MeHg) || !math.isValid(Hg) ) { return null }
  if (0  <= MeHg && MeHg <= 0.005*Hg) {
    return 0.02
  } else if (0.005*Hg < MeHg)  {
    return math.evaluate(`((0.0001)/(((${MeHg})/(${Hg}))))`)
  }
  return null
}

const waterFreshwaterAcuteChromiumIIITotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.819(log(${hardness}, e))+3.7256)`)
}

const waterFreshwaterChronicChromiumIIITotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8190(log(${hardness}, e))+0.6848)`)
}

const waterFreshwaterAcuteChromiumIIIDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.316*exp(0.819(log(${hardness}, e))+3.7256)`)
}

const waterFreshwaterChronicChromiumIIIDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.86*exp(0.8190(log(${hardness}, e))+0.6848)`)
}

const waterFreshwaterChronicBerylliumApprovedCAON = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 75) {
    return 11
  } else if (75 <= hardness) {
    return 1100
  }
  return null
}

const waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC = (params) => {
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

const waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC = (params) => {
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

const waterFreshwaterChronicCobaltTotalApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(` exp(0.414(log(max(52, min(${hardness}, 396, e))))-1.887) `)
}

const waterFreshwaterChronicLeadDissolvedApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  const { DOC } = params
  if ( !math.isValid(DOC) ) { return null }
  return math.evaluate(`exp(0.514(log(max(0.5,min(${DOC}, 31.5, e))))+ 0.214(log(max(4.7,min(${hardness}, 511, e)))) + 0.4152)`)
}

const waterFreshwaterChronicIronTotalDraftCA = (params) => {
  const { pH, DOC } = params
  if ( !math.isValid(pH) || !math.isValid(DOC) ) { return null }
  return math.evaluate(`exp(0.671(log(max(0.3, min(${DOC}, 9.9, e))))+0.171*(max(6.1, min(${pH}, 8.1)))+5.586)`)
}

const waterFreshwaterAcuteCadmiumTotalApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`pow(10, 1.016(log(max(5.3, min(${hardness}, 360))))-1.71)`)
}

const waterFreshwaterChronicCadmiumTotalApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`pow(10, 0.83(log(max(17, min(${hardness}, 280))))-2.46) `)
}

const waterFreshwaterChronicCadmiumInterimCAON = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0  <= hardness  <= 100) {
    return 0.1
  } else if (100 < hardness) {
    return 0.5
  }
  return null
}

const waterFreshwaterChronicCadmiumInterimCASK = (params) => {
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

const waterFreshwaterChronicCopperInterimCAON = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 20) {
    return 1
  } else if (hardness < 20) {
    return 5
  }
  return null
}

const waterFreshwaterChronicCopperTotalApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (hardness !== null) {
    return math.evaluate(`0.2*exp(0.8545(log(max(82, min(${hardness}, 180, e))))-1.465)`)
  } else {
    return 2
  }
}

const waterFreshwaterChronicCopperInterimCASK = (params) => {
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

const waterFreshwaterAcuteDehydroabieticacidInterimCAON = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  if (pH === 5) {
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
  } else if (8 < pH && pH <= 9) {
    return 14*0.001
  }
  return null
}

const waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON = (params) => {
  const { temperature } = params
  if ( !math.isValid(temperature) ) { return null }
  if (0 <= temperature && temperature < 5) {
    return 8
  } else if (5 <= temperature && temperature < 10) {
    return 7
  } else if (10 <= temperature && temperature < 20) {
    return 6
  } else if (20 <= temperature) {
    return 5
  }
  return null
}

const waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON = (params) => {
  const { temperature } = params
  if ( !math.isValid(temperature) ) { return null }
  if (0 <= temperature && temperature < 5) {
    return 7
  } else if (5 <= temperature && temperature < 10) {
    return 6
  } else if (10 <= temperature && temperature < 20) {
    return 5
  } else if (20 <= temperature) {
    return 4
  }
  return null
}

const waterFreshwaterChronicLeadInterimCAON = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 30) {
    return 1
  } else if (30 <= hardness && hardness <= 80) {
    return 3
  } else if (80 < hardness) {
    return 5
  }
  return null
}

const waterFreshwaterChronicLeadApprovedCAON = (params) => {
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

const waterFreshwaterChronicLeadTotalApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 60) {
    return 1
  } else {
    return math.evaluate(`exp(1.273(log(min(${hardness}, 180, e)))-4.705)`)
  }
}

const waterFreshwaterChronicLeadInterimCASK = (params) => {
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

const waterFreshwaterAcuteManganeseDissolvedApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.878(log(max(25, min(${hardness}, 250, e))))+4.76)`)
}

const waterFreshwaterChronicNickelTotalApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 60) {
    return 25
  } else {
    return math.evaluate(`exp(0.76(log(min(${hardness}, 180, e)))+1.06)`)
  } 
}

const waterFreshwaterChronicNickelInterimCASK = (params) => {
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

const waterFreshwaterAcuteAceticacidApprovedCAQC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(0.2732*(${pH})+9.2333)`)*1000
}

const waterFreshwaterChronicAceticacidApprovedCAQC = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(0.2732*(${pH})+7.0362)`)*1000
}

const waterFreshwaterAcuteBariumApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.0629(log(${hardness}, e))+2.2354)`)
}

const waterFreshwaterChronicBariumApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.0629(log(${hardness}, e))+1.1869)`)
}

const waterFreshwaterAcuteBerylliumApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.6839(log(${hardness}, e))-3.6603)`)
}

const waterFreshwaterChronicBerylliumApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.6839(log(${hardness}, e))-5.8575)`)
}

const waterFreshwaterAcuteCadmiumTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`(( exp(1.0166(log(${hardness}, e))-3.924))/(1000 ))`)*1000
}

const waterFreshwaterChronicCadmiumTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((exp(0.7409(log(${hardness}, e))-4.719))/(1000))`)*1000
}

const waterFreshwaterAcuteCadmiumDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(1.0166(log(${hardness}, e))-3.924))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(((exp(1.0166(log(${hardness}, e))-3.924))/(1000)))*(1.136672-0.041838(log(${hardness}, e)))`)*1000
  }
  return null
}

const waterFreshwaterChronicCadmiumDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(0.7409(log(${hardness}, e))-4.719))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(((exp(0.7409(log(${hardness}, e))-4.719))/(1000)))*(1.101672-0.041838(log(${hardness}, e)))`)*1000
  }
  return null
}

const waterFreshwaterAcuteCopperTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((exp(0.9422(log(${hardness}, e))-1.700))/(1000))`)*1000
}

const waterFreshwaterChronicCopperTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((exp(0.8545(log(${hardness}, e))-1.702))/(1000))`)*1000
}

const waterFreshwaterAcuteCopperDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((0.96*exp(0.9422(log(${hardness}, e))-1.700))/(1000))`)*1000
}

const waterFreshwaterChronicCopperDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((0.96*exp(0.8545(log(${hardness}, e))-1.702))/(1000))`)*1000
}

const waterFreshwaterAcuteLeadDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(1.273(log(${hardness}, e))-1.460))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(1.46203-0.145712(log(${hardness}, e)))*((exp(1.273(log(${hardness}, e))-1.460))/(1000))`)*1000
  }
  return null
}

const waterFreshwaterChronicLeadDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness < 25) {
    return math.evaluate(`((exp(1.273(log(${hardness}, e))-4.705))/(1000))`)*1000
  } else if (25 <= hardness) {
    return math.evaluate(`(1.46203-0.145712(log(${hardness}, e)))*((exp(1.273(log(${hardness}, e))-4.705))/(1000))`)*1000
  }
  return null
}

const waterFreshwaterAcuteLeadTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`(( exp(1.273(log(${hardness}, e))-1.460))/(1000 ))`)*1000
}

const waterFreshwaterChronicLeadTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`(( exp(1.273(log(${hardness}, e))-4.705))/(1000 ))`)*1000
}

const waterFreshwaterAcuteManganeseApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8784(log(${hardness}, e))+4.9820)`)
}

const waterFreshwaterChronicManganeseApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8784(log(${hardness}, e))+3.5199)`)
}

const waterFreshwaterAcuteSilverTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((exp(1.72(log(${hardness}, e))-6.52))/(2))`)
}

const waterFreshwaterAcuteSilverDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`((0.85*exp(1.72(log(${hardness}, e))-6.52))/(2))`)
}

const waterFreshwaterAcuteUraniumApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (20 <= hardness && hardness <= 100) {
    return 0.32*1000
  } else if (100 < hardness && hardness <= 210) {
    return 2.3*1000
  }
  return null
}

const waterFreshwaterChronicUraniumApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (20 <= hardness && hardness <= 100) {
    return 0.014*1000
  } else if (100 < hardness && hardness <= 210) {
    return 0.1*1000
  }
  return null
}

const waterFreshwaterAcuteZincTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterChronicZincTotalApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterAcuteZincDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.978*exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterChronicZincDissolvedApprovedCAQC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.986*exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterAcuteLeadDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273(log(${hardness}, e))-1.460)*(1.46203-0.145712(log(${hardness}, e)))`)
}

const waterFreshwaterChronicLeadDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273(log(${hardness}, e))-4.705)*(1.46203-0.145712(log(${hardness}, e)))`)
}

const waterFreshwaterAcuteLeadTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273(log(${hardness}, e))-1.460)`)
}

const waterFreshwaterChronicLeadTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.273(log(${hardness}, e))-4.705)`)
}

const waterFreshwaterAcuteNickelTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.846(log(${hardness}, e))+2.255)`)
}

const waterFreshwaterChronicNickelTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.846(log(${hardness}, e))+.0584)`)
}

const waterFreshwaterAcuteNickelDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.998*exp(0.846(log(${hardness}, e))+2.255)`)
}

const waterFreshwaterChronicNickelDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.997*exp(0.846(log(${hardness}, e))+.0584)`)
}

const waterFreshwaterChronicAmmoniaandammoniumAsNUnfilteredApprovedCA = (params) => {
  const { pH, temperature } = params
  if ( !math.isValid(pH) || !math.isValid(temperature) ) { return null }
  return math.evaluate(`0.8224*((1)/(pow(10, (0.0901821+((2729.92)/(${temperature} +273.15))) - ${pH})+1))`)
}

const waterFreshwaterAcutePentachlorophenolApprovedUS = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(1.005*${pH} - 4.869)`)
}

const waterFreshwaterChronicPentachlorophenolApprovedUS = (params) => {
  const { pH } = params
  if ( !math.isValid(pH) ) { return null }
  return math.evaluate(`exp(1.005*${pH} - 5.134)`)
}

const waterFreshwaterAcuteSilverTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(1.72(log(${hardness}, e))-6.52)`)
}

const waterFreshwaterAcuteSilverDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.85*exp(1.72(log(${hardness}, e))-6.52)`)
}

const waterFreshwaterAcuteSilverApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 100) {
    return 0.1
  } else if (100 < hardness) {
    return 3.0
  }
  return null
}

const waterFreshwaterChronicSilverApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 100) {
    return 0.05
  } else if (100 < hardness) {
    return 1.5
  }
  return null
}

const waterFreshwaterChronicSulphateApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (hardness <= 30) {
    return 128
  } else if (30 < hardness && hardness <= 75) {
    return 218
  } else if (75 < hardness && hardness <= 180) {
    return 309
  } else if (180 < hardness) {
    return 429
  } 
  return null
}

const waterFreshwaterAcuteZincDissolvedApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  const { DOC } = params
  if ( !math.isValid(DOC) ) { return null }
  return math.evaluate(` exp(0.833(log(max(13.8, min(${hardness}, 250.5, e))))+0.240(max(0.3, min(${DOC}, 17.3)))+0.526) `)
}

const waterFreshwaterAcuteZincTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterChronicZincTotalApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterAcuteZincDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.978*exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterChronicZincDissolvedApprovedUS = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  return math.evaluate(`0.986*exp(0.8473(log(${hardness}, e))+0.884)`)
}

const waterFreshwaterAcuteEarlylifestageDissolvedOxygenDissolvedApprovedUS = (params) => {
  const { temperature } = params
  if ( !math.isValid(temperature) ) { return null }
  if (temperature <= 5) {
    return 8.0
  } else if (5 < temperature) {
    return 5.0
  }
  return null
}

const waterFreshwaterChronicEarlylifestageDissolvedOxygenDissolvedApprovedUS = (params) => {
  const { temperature } = params
  if ( !math.isValid(temperature) ) { return null }
  if (temperature <= 5) {
    return 9.5
  } else if (5 < temperature) {
    return 6.0
  }
  return null
}

const waterFreshwaterAcuteOtherlifestageDissolvedOxygenDissolvedApprovedUS = (params) => {
  const { temperature } = params
  if ( !math.isValid(temperature) ) { return null }
  if (temperature <= 5) {
    return 4.0
  } else if (5 < temperature) {
    return 3.0
  }
  return null
}

const waterFreshwaterChronicOtherlifestageDissolvedOxygenDissolvedApprovedUS = (params) => {
  const { temperature } = params
  if ( !math.isValid(temperature) ) { return null }
  if (temperature <= 5) {
    return 5.0
  } else if (5 < temperature) {
    return 4.0
  }
  return null
}

const waterFreshwaterChronicZincDissolvedApprovedCA = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  const { pH, DOC } = params
  if ( !math.isValid(pH) || !math.isValid(DOC) ) { return null }
  return math.evaluate(`exp(0.947(log(max(23.4, min(${hardness}, 399, e))))-0.815(max(6.5, min(${pH}, 8.13)))+0.398(log(max(0.3, min(${DOC}, 22.9, e))))+4.625)`)
}

const waterFreshwaterAcuteZincApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 90) {
    return 33
  } else if (90 < hardness && hardness < 500) {
    return math.evaluate(`33+0.75*(${hardness}-90)`)
  }
  return null
}

const waterFreshwaterChronicZincApprovedCABC = (params) => {
  const hardness = calculateHardness(params)
  if ( !math.isValid(hardness) ) { return null }
  if (0 <= hardness && hardness <= 90) {
    return 7.5
  } else if (90 < hardness && hardness < 330) {
    return math.evaluate(`7.5+0.75*(${hardness}-90)`)
  } 
  return null
}

module.exports = {
  waterFreshwaterAcuteCopperTotalApprovedCAAB,
  waterFreshwaterChronicAlkalinityWorkingCABC,
  waterFreshwaterAcuteAluminumDissolvedApprovedCABC,
  waterFreshwaterChronicAluminumDissolvedApprovedCABC,
  waterFreshwaterAcuteAmmoniaAsNApprovedCABC,
  waterFreshwaterChronicAmmoniaAsNApprovedCABC,
  waterFreshwaterAcuteAmmoniaAsNUnfilteredApprovedUS,
  waterFreshwaterChronicAmmoniaAsNUnfilteredApprovedUS,
  waterFreshwaterAcuteCadmiumDissolvedApprovedCABC,
  waterFreshwaterChronicCadmiumDissolvedApprovedCABC,
  waterFreshwaterChronicAluminumTotalApprovedCA,
  waterMarineChronicChlorideDissolvedApprovedCABC,
  waterFreshwaterChronicAmmoniaandammoniumAsNH3UnfilteredApprovedCA,
  waterFreshwaterChronicApparentColourApprovedCABC,
  waterFreshwaterAcuteCadmiumDissolvedApprovedCAMB,
  waterFreshwaterChronicCadmiumDissolvedApprovedCAMB,
  waterFreshwaterAcuteCadmiumTotalApprovedUS,
  waterFreshwaterChronicCadmiumTotalApprovedUS,
  waterFreshwaterAcuteCadmiumDissolvedApprovedUS,
  waterFreshwaterChronicCadmiumDissolvedApprovedUS,
  waterFreshwaterAcuteFluorideInterimCABC,
  waterFreshwaterAcuteLeadApprovedCABC,
  waterFreshwaterChronicLeadApprovedCABC,
  waterFreshwaterAcuteManganeseApprovedCABC,
  waterFreshwaterChronicManganeseApprovedCABC,
  waterFreshwaterChronicMercuryApprovedCABC,
  waterMarineChronicMercuryApprovedCABC,
  waterFreshwaterAcuteChromiumIIITotalApprovedUS,
  waterFreshwaterChronicChromiumIIITotalApprovedUS,
  waterFreshwaterAcuteChromiumIIIDissolvedApprovedUS,
  waterFreshwaterChronicChromiumIIIDissolvedApprovedUS,
  waterFreshwaterChronicBerylliumApprovedCAON,
  waterFreshwaterAcuteNitriteAsNUnfilteredApprovedCABC,
  waterFreshwaterChronicNitriteAsNUnfilteredApprovedCABC,
  waterFreshwaterChronicCobaltTotalApprovedCA,
  waterFreshwaterChronicLeadDissolvedApprovedCA,
  waterFreshwaterChronicIronTotalDraftCA,
  waterFreshwaterAcuteCadmiumTotalApprovedCA,
  waterFreshwaterChronicCadmiumTotalApprovedCA,
  waterFreshwaterChronicCadmiumInterimCAON,
  waterFreshwaterChronicCadmiumInterimCASK,
  waterFreshwaterChronicCopperInterimCAON,
  waterFreshwaterChronicCopperTotalApprovedCA,
  waterFreshwaterChronicCopperInterimCASK,
  waterFreshwaterAcuteDehydroabieticacidInterimCAON,
  waterFreshwaterChroniccoldwaterbiotaDissolvedoxygenDODissolvedApprovedCAON,
  waterFreshwaterChronicwarmwaterbiotaDissolvedoxygenDODissolvedApprovedCAON,
  waterFreshwaterChronicLeadInterimCAON,
  waterFreshwaterChronicLeadApprovedCAON,
  waterFreshwaterChronicLeadTotalApprovedCA,
  waterFreshwaterChronicLeadInterimCASK,
  waterFreshwaterAcuteManganeseDissolvedApprovedCA,
  waterFreshwaterChronicNickelTotalApprovedCA,
  waterFreshwaterChronicNickelInterimCASK,
  waterFreshwaterAcuteAceticacidApprovedCAQC,
  waterFreshwaterChronicAceticacidApprovedCAQC,
  waterFreshwaterAcuteBariumApprovedCAQC,
  waterFreshwaterChronicBariumApprovedCAQC,
  waterFreshwaterAcuteBerylliumApprovedCAQC,
  waterFreshwaterChronicBerylliumApprovedCAQC,
  waterFreshwaterAcuteCadmiumTotalApprovedCAQC,
  waterFreshwaterChronicCadmiumTotalApprovedCAQC,
  waterFreshwaterAcuteCadmiumDissolvedApprovedCAQC,
  waterFreshwaterChronicCadmiumDissolvedApprovedCAQC,
  waterFreshwaterAcuteCopperTotalApprovedCAQC,
  waterFreshwaterChronicCopperTotalApprovedCAQC,
  waterFreshwaterAcuteCopperDissolvedApprovedCAQC,
  waterFreshwaterChronicCopperDissolvedApprovedCAQC,
  waterFreshwaterAcuteLeadDissolvedApprovedCAQC,
  waterFreshwaterChronicLeadDissolvedApprovedCAQC,
  waterFreshwaterAcuteLeadTotalApprovedCAQC,
  waterFreshwaterChronicLeadTotalApprovedCAQC,
  waterFreshwaterAcuteManganeseApprovedCAQC,
  waterFreshwaterChronicManganeseApprovedCAQC,
  waterFreshwaterAcuteSilverTotalApprovedCAQC,
  waterFreshwaterAcuteSilverDissolvedApprovedCAQC,
  waterFreshwaterAcuteUraniumApprovedCAQC,
  waterFreshwaterChronicUraniumApprovedCAQC,
  waterFreshwaterAcuteZincTotalApprovedCAQC,
  waterFreshwaterChronicZincTotalApprovedCAQC,
  waterFreshwaterAcuteZincDissolvedApprovedCAQC,
  waterFreshwaterChronicZincDissolvedApprovedCAQC,
  waterFreshwaterAcuteLeadDissolvedApprovedUS,
  waterFreshwaterChronicLeadDissolvedApprovedUS,
  waterFreshwaterAcuteLeadTotalApprovedUS,
  waterFreshwaterChronicLeadTotalApprovedUS,
  waterFreshwaterAcuteNickelTotalApprovedUS,
  waterFreshwaterChronicNickelTotalApprovedUS,
  waterFreshwaterAcuteNickelDissolvedApprovedUS,
  waterFreshwaterChronicNickelDissolvedApprovedUS,
  waterFreshwaterChronicAmmoniaandammoniumAsNUnfilteredApprovedCA,
  waterFreshwaterAcutePentachlorophenolApprovedUS,
  waterFreshwaterChronicPentachlorophenolApprovedUS,
  waterFreshwaterAcuteSilverTotalApprovedUS,
  waterFreshwaterAcuteSilverDissolvedApprovedUS,
  waterFreshwaterAcuteSilverApprovedCABC,
  waterFreshwaterChronicSilverApprovedCABC,
  waterFreshwaterChronicSulphateApprovedCABC,
  waterFreshwaterAcuteZincDissolvedApprovedCA,
  waterFreshwaterAcuteZincTotalApprovedUS,
  waterFreshwaterChronicZincTotalApprovedUS,
  waterFreshwaterAcuteZincDissolvedApprovedUS,
  waterFreshwaterChronicZincDissolvedApprovedUS,
  waterFreshwaterAcuteEarlylifestageDissolvedOxygenDissolvedApprovedUS,
  waterFreshwaterChronicEarlylifestageDissolvedOxygenDissolvedApprovedUS,
  waterFreshwaterAcuteOtherlifestageDissolvedOxygenDissolvedApprovedUS,
  waterFreshwaterChronicOtherlifestageDissolvedOxygenDissolvedApprovedUS,
  waterFreshwaterChronicZincDissolvedApprovedCA,
  waterFreshwaterAcuteZincApprovedCABC,
  waterFreshwaterChronicZincApprovedCABC
}
