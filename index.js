const formula = require('./formula')

const metadataArray = require('./metadata.json')
const hardnessParams = require('./hardness_params.json')

const convertUnits = require('./units')

const filterMetadata = (params = {}, guidelineKeys = []) => {
  const arr = []
  for (let i = 0, l = metadataArray.length; i < l; i++) {
    let match = true
    Object.keys(params).forEach(key => {
      //console.log(key, params[key], '==', metadataArray[i][key])
      if (Array.isArray(params[key])) {
        // cover case type: [value, range]
        match = match && params[key].indexOf(metadataArray[i][key]) !== -1
      } else {
        match = match && metadataArray[i][key] === params[key]
      }
    })

    if (guidelineKeys.length) {
      match = match && Object.keys(metadataArray[i].guidelines).filter(key => !!metadataArray[i].guidelines[key]).some(key => guidelineKeys.includes(key))
    }

    if (match) {
      arr.push(metadataArray[i])
    }
  }
  return arr
}

/**
 * Calculate guidelines
 * @param filters={characteristic_name, method_speciation, sample_fraction, type}
 * @param params={pH, DOC, Ca, Mg, ...}
 */
const calculate = (filters, params) => {
  const {unit, guidelines} = filterMetadata(filters)[0]

  const guides = {}
  Object.keys(guidelines).forEach(key => {
    if (guidelines[key]) guides[key] = guidelines[key]
    if (typeof guides[key] === 'string') {  // aka type === formula
      guides[key] = formula[guides[key]](params)
    }
  })

  return {name, unit, guidelines: guides}
}

module.exports = {hardnessParams, convertUnits, filterMetadata, calculate}
