const lower = (word) => word.toLowerCase()

const order = (word) => lower(word).split('').sort().join('')

const isAnagram = (initial) => (word) => {
  return lower(word) !== lower(initial) && order(initial) === order(word)
}

module.exports = class {
  constructor(word) {
    this.word = word
  }

  matches(words, ...rest) {
    const wordsArr = (Array.isArray(words) ? words : [words]).concat(rest)
    return wordsArr.filter(isAnagram(this.word))
  }
}
