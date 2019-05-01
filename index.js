const metadata = require('guidelines.json')
const formula = require('formula')

// map datastream params to name
export const findByDataStream = (characteristic_name, method_speciation, sample_fraction) => {
  for(let i = 0, l = metadata.length; i<l; i++) {
    if (
      metadata[i].characteristic_name === characteristic_name
      && metadata[i].method_speciation === method_speciation
      && metadata[i].sample_fraction === sample_fraction
    ) {
      return metadata[i]
    }
  }
  return null
}

export const findByName = (name) => {
  for(let i = 0, l = metadata.length; i<l; i++) {
    if (metadata[i].name === name) {
      return metadata[i]
    }
  }
  return null
}

const paramMapping = {
  pH: {
    characteristic_name: 'pH',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'None'
  },
  DOC:{
    characteristic_name: 'Organic carbon',
    method_speciation: null,
    sample_fraction: 'Dissolved',
    result_unit: 'mg/L'
  },
  TH: {
    characteristic_name: 'Total hardness',
    method_speciation: 'as CaCO3',
    sample_fraction: null,
    result_unit: 'mg/L'
  },
  CH:{
    characteristic_name:'Hardness, carbonate',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'mg/L'
  },
  NCH:{
    characteristic_name:'Hardness, non-carbonate',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'mg/L'
  },
  CaCO3: {
    characteristic_name: 'Hardness, Ca, Mg',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'mg/L'
  },
  Ca:{
    characteristic_name: 'Hardness, Calcium',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'mg/L'
  },
  Mg:{
    characteristic_name: 'Hardness, magnesium',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'mg/L'
  },
  CaIon:{
    characteristic_name: 'Calcium',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'mg/L'
  },
  MgIon:{
    characteristic_name: 'Magnesium',
    method_speciation: null,
    sample_fraction: null,
    result_unit: 'mg/L'
  }
}

/**
 * Calculate guidelines
 * @param name
 * @param params={pH, DOC, Ca, Mg}
 */
export const calculate = (name, params) => {
  const {unit, type, guidelines} = findByName(name)

  if (type === 'formula') {
    Object.keys(guidelines).forEach(key => {
      guidelines[key] = formula[guidelines[key]](params)
    })
  }

  return {name, unit, guidelines}
}
