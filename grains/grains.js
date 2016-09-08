const bigInt = require('./big-integer')

module.exports = class {
  square(i) {
    return bigInt(2).pow(i - 1).toString()
  }

  total() {
    return square(63)
  }
}
