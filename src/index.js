'use strict'

const chalk = require('chalk')
const figlet = require('figlet')
const { getInstructions } = require('./global')

function run() {
  console.log(chalk.greenBright(figlet.textSync('Colossal Cave Adventure', {
    font: 'Doom',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  })))

  getInstructions()
}

module.exports = { run }
