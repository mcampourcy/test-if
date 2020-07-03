'use strict'

const readline = require('readline')
const chalk = require('chalk')
const figlet = require('figlet')

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

function display(string) {
  console.log(format(string))
}

function displayLine(string) {
  console.log(`\n${string}\n`)
}

function format(string) {
  return `\n${string}\n\n`
}

function displayTitle() {
  console.log(chalk.green(figlet.textSync('Colossal Cave \n Adventure', {
    font: 'Doom',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  })))
}

module.exports = {
  consoleInput, display, displayLine, displayTitle, format,
}
