'use strict'

const http = require('http')
const url = require('url')

const port = process.argv[2]
const server = http.createServer(onRequest)

function onRequest (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const date = new Date(parsedUrl.query.iso)
  let result

  if (parsedUrl.pathname === '/api/parsetime') {
    const parsedDate = parseTime(date)
    result = JSON.stringify(parsedDate)
  } else if (parsedUrl.pathname === '/api/unixtime') {
    const parsedDate = unixTime(date)
    result = JSON.stringify(parsedDate)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(result)
  }

  res.writeHead(404, { 'Content-type': 'text/plain' })
  res.statusCode = 404
  res.end('Not found')
}

function parseTime (date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function unixTime (date) {
  return { unixtime: date.getTime() }
}

server.listen(Number(port))
