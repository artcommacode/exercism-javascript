const complements = {G: 'C', C: 'G', T: 'A', A: 'U'}

module.exports = class {
  toRna(dna) {
    return dna.split('').map((char) => complements[char]).join('')
  }
}
