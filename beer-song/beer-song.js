const bottles = (num) => `${num} bottle${num !== 1 ? 's' : ''}`

const nBottles = (num) => `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${bottles(num - 1)} of beer on the wall.\n`

const oneBottle = (num) => `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`

const zeroBottles = () => `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`

module.exports = class {
  verse(num) {
    return num < 1   ? zeroBottles()
         : num === 1 ? oneBottle(num)
         :             nBottles(num)
  }

  sing(from, to = 0) {
    const next = from <= to ? '' : `\n${this.sing(from - 1, to)}`
    return this.verse(from) + next
  }
}
