const numberInString = '42138'

// Funcionam, mas não são as melhores maneiras de fazer isso
// const numberConverted = +numberInString
// const numberConverted = parseInt(numberInString)

const numberConverted = Number(numberInString)

// const isNumberNull = !!numberInString
const isNumberNull = Boolean(numberInString)

const number = 38245

// const numberAsString = '' + number
const numberAsString = String(number)