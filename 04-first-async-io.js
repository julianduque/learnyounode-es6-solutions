'use strict'

const fs = require('fs')

const filename = process.argv[2]

fs.readFile(filename, 'utf8', printLines)

function printLines (err, file) {
  if (err) throw err

  const lines = file.split('\n').length - 1
  console.log(lines)
}
