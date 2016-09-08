const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const num = '0123456789'
const givenNames = {}

const getRand = (str) => str[Math.floor(Math.random() * str.length)]
const getName = () => [alpha, alpha, num, num, num].reduce((acc, str) => acc + getRand(str), '')

module.exports = class {
  constructor() {
    this.name = this.giveName()
  }

  giveName() {
    const name = getName()
    if (givenNames[name]) return this.giveName()
    givenNames[name] = true
    return name
  }

  reset() {
    this.name = this.giveName()
  }
}
