const values = [
  ['Earth', 1],
  ['Mercury', 0.2408467],
  ['Venus', 0.61519726],
  ['Mars', 1.8808158],
  ['Jupiter', 11.862615],
  ['Saturn', 29.447498],
  ['Uranus', 84.016846],
  ['Neptune', 164.79132]
]

module.exports = class {
  constructor(seconds) {
    this.seconds = seconds
    values.forEach(([name, ratio]) => {
      this[`on${name}`] = () => this.doCalc(ratio)
    })
  }

  doCalc(ratio) {
    return +(this.seconds / 31557600 / ratio).toFixed(2)
  }
}
