const merge = (...xs) => Object.assign({}, ...xs)

module.exports = class {
  count(sentence) {
    return sentence.trim().toLowerCase().split(/\s+/).reduce((acc, word) => {
      return merge(acc, {[word]: Number.parseInt(acc[word]) + 1 || 1})
    }, {})
  }
}
