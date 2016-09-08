module.exports = class {
  constructor() {
    this.school = {}
  }

  add(name, grade) {
    this.school[grade] = this.grade(grade).concat([name]).sort()
  }

  grade(grade) {
    return this.school[grade] || []
  }

  roster() {
    return this.school
  }
}
