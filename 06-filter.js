'use strict'

const fs = require('fs')
const path = require('path')

function filter (dirname, ext, callback) {
  fs.readdir(dirname, onReaddir)

  function onReaddir (err, files) {
    if (err) return callback(err)

    const filtered = files.filter((file) => path.extname(file) === `.${ext}`)
    callback(null, filtered)
  }
}

module.exports = filter
