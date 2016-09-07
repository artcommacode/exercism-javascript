const isLetter = (char) => /[A-zÀ-ÿ]/.test(char)

module.exports = class {
  constructor(word) {
    this.word = word.toLowerCase().split('').filter(isLetter)
  }

  isIsogram() {
    return this.word.reduce((isIso, char, i) => (isIso && this.word.indexOf(char) === i), true)
  }
}
