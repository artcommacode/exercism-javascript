const isUpper = (str) => /[A-Z]/.test(str)

const firstAndUpper = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).split('').filter(isUpper).join('')
}

module.exports.parse = (phrase) => {
  const trimmed = phrase.split(':')[0]
  return trimmed.split(/\s|-/).map(firstAndUpper).join('')
}
