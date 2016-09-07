const zip = (xs, ys) => xs.map((x, i) => [x, ys[i]])

module.exports = class {
  compute(as, bs) {
    if (as.length !== bs.length) throw Error('DNA strands must be of equal length.')
    return zip(as.split(''), bs.split('')).filter(([a, b]) => a !== b).length
  }
}
