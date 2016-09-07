const hasLetters = (str) => /[a-zA-Z]/.test(str)

const lastChar = (phrase) => phrase.charAt(phrase.length - 1)

const isQuestion = (phrase) => lastChar(phrase) === '?'

const isYelling = (phrase) => hasLetters(phrase) && phrase === phrase.toUpperCase()

const isSilent = (phrase) => !phrase.trim()

module.exports = class {
  hey(phrase) {
    return isYelling(phrase)  ? 'Whoa, chill out!'
         : isQuestion(phrase) ? 'Sure.'
         : isSilent(phrase)   ? 'Fine. Be that way!'
         :                      'Whatever.'
  }
}
