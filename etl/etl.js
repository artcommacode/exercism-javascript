const merge = (...xs) => Object.assign({}, ...xs)

module.exports = class {
  transform(old) {
    return Object.keys(old).reduce((acc, value) => {
      return merge(acc, old[value].reduce((acc2, char) => {
        return merge(acc2, {[char.toLowerCase()]: +value})
      }, {}))
    }, {})
  }
}
