'use strict'

const http = require('http')

const uri = process.argv[2]
let result = ''

http.get(uri, onGet)

function onGet (res) {
  res.setEncoding('utf8')
  res.on('data', (data) => {
    result += data
  })

  res.on('end', () => {
    console.log(result.length)
    console.log(result)
  })

  res.on('error', (err) => console.error(err))
}
