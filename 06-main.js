'use strict'

const filter = require('./06-filter')

const dirname = process.argv[2]
const ext = process.argv[3]

filter(dirname, ext, (err, files) => {
  if (err) return process.exit(1)

  files.forEach((file) => console.log(file))
})
