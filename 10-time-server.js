'use strict'

const net = require('net')

const port = process.argv[2]

const server = net.createServer((socket) => {
  const date = new Date()

  socket.write(formatDate(date))
  socket.end('\n')
})

function formatDate (date) {
  let month = zeroFill(date.getMonth() + 1)
  let day = zeroFill(date.getDate())
  let hours = zeroFill(date.getHours())
  let minutes = zeroFill(date.getMinutes())

  return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`
}

function zeroFill (number) {
  if (number < 10) {
    number = `0${number}`
  }

  return number
}

server.listen(port)
