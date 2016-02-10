'use strict'

const numbers = process.argv.slice(2)

let total = 0

for (let i = 0; i < numbers.length; i++) {
  total += Number(numbers[i])
}

console.log(total)
