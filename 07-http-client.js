'use strict'

const http = require('http')

const uri = process.argv[2]

http.get(uri, onGet)

function onGet (res) {
  res.setEncoding('utf8')
  res.on('data', (data) => console.log(data))
  res.on('error', (err) => console.error(err))
}
