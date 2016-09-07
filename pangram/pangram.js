const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

module.exports = class {
  constructor(sentence) {
    this.sentence = sentence.toLowerCase()
  }

  isPangram() {
    return this.sentence.length > 0 && letters.filter((char) => {
      return this.sentence.indexOf(char) === -1
    }).length < 1
  }
}
