const isNumber = (num) => /[0-9]/.test(num)

module.exports = class {
  constructor(phone) {
    this.phone = phone
  }

  number() {
    const cleaned = this.phone.split('').filter(isNumber).join('')
    if (cleaned.length === 10) return cleaned
    if (cleaned.length === 11 && cleaned[0] === '1') return cleaned.slice(1)
    return '0000000000'
  }

  areaCode() {
    return this.number().slice(0, 3)
  }

  toString() {
    const num = this.number()
    return `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6)}`
  }
}
