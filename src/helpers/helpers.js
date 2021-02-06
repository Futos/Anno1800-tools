export const findCharWithTollerance = (src, txt) => {
  if (!src || !txt) {
    return ''
  }
  const re = new RegExp(txt.split('').map(function (a, b, c) { return txt.substr(0, b) + a + '?.?' + txt.substr(b + 1) }).join('|'), 'gi')
  return src.match(re) != null
}

export const umlautify = string => {
  let value = string
  value = value.replace(/ä/g, 'ae')
  value = value.replace(/ö/g, 'oe')
  value = value.replace(/ü/g, 'ue')
  value = value.replace(/ß/g, 'ss')
  value = value.replace(/Ä/g, 'Ae')
  value = value.replace(/Ö/g, 'Oe')
  value = value.replace(/Ü/g, 'Ue')
  return value
}

export const searchify = val => {
  let returnVal = val
  returnVal = returnVal.toLowerCase()
  returnVal = umlautify(returnVal)
  returnVal = encodeURI(returnVal)

  return returnVal
}

export default {
  findCharWithTollerance,
  umlautify,
  searchify
}
