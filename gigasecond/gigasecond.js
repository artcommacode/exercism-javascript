module.exports = class {
  constructor(date) {
    this.d = date
  }

  date() {
    return new Date(this.d.getTime() + 10e11)
  }
}
