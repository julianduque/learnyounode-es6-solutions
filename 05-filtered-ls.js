'use strict'

const fs = require('fs')
const path = require('path')

const dirname = process.argv[2]
const ext = process.argv[3]

fs.readdir(dirname, onReaddir)

function onReaddir (err, files) {
  if (err) throw err

  const filtered = files.filter((file) => path.extname(file) === `.${ext}`)
  filtered.forEach((file) => console.log(file))
}
