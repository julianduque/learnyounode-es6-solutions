'use strict'

const http = require('http')
const map = require('through2-map')

const port = process.argv[2]
const server = http.createServer(onRequest)

function onRequest (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  if (req.method !== 'POST') {
    return res.end('I need a POST request')
  }

  req
    .pipe(map((chunk) => chunk.toString().toUpperCase()))
    .pipe(res)
}

server.listen(Number(port))
