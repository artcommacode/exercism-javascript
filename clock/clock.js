const pipe = (first, ...fns) => (...args) => fns.reduce((acc, fn) => fn(acc), first(...args))

const pad = (x) => x < 10 ? `0${x}` : x
const mod = (val) => (x) => x % val
const abs = (val) => (x) => x < 0 ? val + x : x

const hoursPlusMins = (hours, mins) => hours + Math.floor(mins / 60)

const Clock = class {
  constructor(hours, mins = 0) {
    this.hours = hours
    this.mins = mins
  }

  static at(...args) {
    return new Clock(...args)
  }

  equals(clock) {
    return this.toString() === clock.toString()
  }

  plus(mins) {
    this.mins += mins
    return this
  }

  minus(mins) {
    this.mins -= mins
    return this
  }

  toString() {
    const hours = pipe(hoursPlusMins, mod(24), abs(24), pad)(this.hours, this.mins)
    const mins = pipe(mod(60), abs(60), pad)(this.mins)
    return `${hours}:${mins}`
  }
}

module.exports = Clock
