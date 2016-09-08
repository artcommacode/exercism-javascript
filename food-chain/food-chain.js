const song = [
  ['fly', 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'],
  ['spider', 'It wriggled and jiggled and tickled inside her.\n'],
  ['bird', 'How absurd to swallow a bird!\n'],
  ['cat', 'Imagine that, to swallow a cat!\n'],
  ['dog', 'What a hog, to swallow a dog!\n'],
  ['goat', 'Just opened her throat and swallowed a goat!\n'],
  ['cow', 'I don\'t know how she swallowed a cow!\n'],
  ['horse', 'She\'s dead, of course!\n']
]

module.exports = class {
  next(i) {
    const next = i > 0 ? this.next(i - 1) : song[0][1]
    const ifSpider = i === 1 ? ' that wriggled and jiggled and tickled inside her.' : '.'
    return `She swallowed the ${song[i + 1][0]} to catch the ${song[i][0]}${ifSpider}\n` + next
  }

  verse(verse) {
    const i = verse - 1
    const next = i > 0 && i < 7 ? this.next(i - 1) : ''
    return `I know an old lady who swallowed a ${song[i][0]}.\n${song[i][1]}` + next
  }

  verses(from, to) {
    const next = from < to ? this.verses(from + 1, to) : ''
    return this.verse(from) + `\n${next}`
  }
}
