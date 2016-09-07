const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

module.exports = class {
  constructor(sentence) {
    this.sentence = sentence.toLowerCase()
  }

  isPangram() {
    return letters.filter((char) => this.sentence.indexOf(char) === -1).length < 1
  }
}
