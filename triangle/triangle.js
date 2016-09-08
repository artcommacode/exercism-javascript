module.exports = class {
  constructor(...args) {
    this.triangle = args.sort((x, y) => x - y)
  }

  sidesSame() {
    return this.triangle.reduce((acc, side, i) => {
      return acc + (this.triangle.indexOf(side) !== i ? 1 : 0)
    }, 1)
  }

  hasBadLength() {
    return this.triangle.reduce((acc, side) => side <= 0 ? true : acc, false)
  }

  violatesEquality() {
    return this.triangle[0] + this.triangle[1] < this.triangle[2]
  }

  kind() {
    if (this.hasBadLength() || this.violatesEquality()) throw Error()
    return ['error', 'scalene', 'isosceles', 'equilateral'][this.sidesSame()]
  }
}
