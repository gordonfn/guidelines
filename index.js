const formula = require('./lib/formula')

const metadataArray = require('./lib/metadata.json')
const formulaParams = require('./lib/formula_params.json')

// TODO add in region filter
const filterMetadata = (params = {}, media = null) => {
  media = media || params.media || null

  const arr = []
  for (let i = 0, l = metadataArray.length; i < l; i++) {
    let match = true
    Object.keys(params).forEach(key => {
      //console.log(key, params[key], '==', metadataArray[i][key])
      if (params[key] === '') { // make matching more flexible
        match = match && true
      } else if (Array.isArray(params[key])) {
        // cover case type: [value, range]
        let submatch = false
        for (const allowed of metadataArray[i][key]) {
          submatch = submatch || params[key].includes(allowed)
        }
        match = match && submatch
      } else {
        match = match && metadataArray[i][key] === params[key]
      }
      if (media && params[key] === 'media') {
        Object.keys(metadataArray[i].guidelines).includes(media)
      }
    })

    /*if (guidelineKeys.length) {
      match = match && Object.keys(metadataArray[i].guidelines).filter(key => !!metadataArray[i].guidelines[key]).some(key => guidelineKeys.includes(key))
    }*/

    if (match) {
      arr.push(metadataArray[i])
    }
  }
  return arr
}

/**
 * Calculate guidelines
 * @param filters={media, characteristic, method_speciation, sample_fraction, type}
 * @param params={pH, DOC, Ca, Mg, ...}
 */
const calculate = (filters, params) => {
  const metadata = filterMetadata(filters)
  if (!metadata.length) return { unit: null, guidelines: {} }
  const { unit, guidelines } = metadata[0]

  const guides = {}
  for (const region of Object.keys(guidelines)) {
    for (const kind of Object.keys(guidelines[region])) {
      if (guidelines[region][kind]) updateObjProp(guides, `${region}.${kind}`,  guidelines[region][kind])
      if (typeof guides[region][kind] === 'string') {
        try {
          const value = formula[guides[region][kind]](params)
          if (value) {
            guides[region][kind] = value
          }
        } catch (e) {
          console.error(`Error: Failed to calculate ${guides[region][kind]} (`, params, ')', e.message)
        }
      }
    }
  }
  return { unit, guidelines: guides }
}

updateObjProp = (obj, propPath, value) => {
  const [head, ...rest] = propPath.split('.')

  if (rest.length && !obj[head]) obj[head] = {}

  !rest.length
    ? obj[head] = value
    : updateObjProp(obj[head], rest.join('.'), value)
}

module.exports = { formulaParams, metadataArray, filterMetadata, calculate }
