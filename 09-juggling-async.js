'use strict'

const http = require('http')

const uris = process.argv.slice(2)

uris.forEach(doRequest)

let results = []
let count = 0

function doRequest (uri, index) {
  var result = ''
  http.get(uri, onGet)

  function onGet (res) {
    res.setEncoding('utf8')
    res.on('data', (data) => {
      result += data
    })

    res.on('end', () => {
      results[index] = result
      count++

      if (count === uris.length) {
        results.forEach((item) => console.log(item))
      }
    })

    res.on('error', (err) => console.error(err))
  }
}
