'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function consoleInput(question, cb) {
  rl.question(question, (answer) => {
    rl.resume()
    cb(answer)
  })
}

function displayText(string) {
  console.log(format(string))
}

function displayLine(string) {
  console.log(`\n${string}\n`)
}

function format(string) {
  return `\n${string}\n\n`
}

module.exports = {
  consoleInput, displayText, displayLine, format,
}
