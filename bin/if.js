'use strict'

const chalk = require('chalk')
const figlet = require('figlet')
const { consoleInput, format } = require('../src/console')

/* eslint-disable global-require */

require = require('esm')(module /* , options */)
slides()

function slides() {
  console.log(chalk.yellowBright(figlet.textSync('Voyage au coeur des Ifs*', {
    font: 'Cybermedium',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  })))

  displayStuff()
}

function displayStuff(display = '*Interactive fictions') {
  const question = format(display)

  consoleInput(question, (input) => {
    switch (input.trim()) {
      case 'definition':
        displayStuff('Les fictions interactives, c\'est comme un livre-dont-vous-êtes-le-héros (mais avec un terminal)')
        break
      case 'history':
        console.log(`\n${chalk.blueBright('[1975]')} ---- Colossal Cave Adventure - W. Crowther\n`)
        console.log(`${chalk.blueBright('[1977]')} ---- Zork series - Infocom\n`)
        console.log(`${chalk.blueBright('[1980]')} ---- Mystery House - R. et K. Williams\n`)
        console.log(`${chalk.blueBright('[1985]')} ---- Même les pommes de terre ont des yeux! - Froggy Software\n`)
        console.log(`${chalk.blueBright('[2013]')} ---- Depression Quest - Zoë Quinn`)
        displayStuff(`${chalk.blueBright('[2016]')} ---- Enterre-moi, mon amour - Florent Maurin`)
        break
      case 'info':
        console.log(`\n${chalk.blueBright('[0]')} --- Ecrit en 1975 par W.Crowther\n`)
        console.log(`${chalk.blueBright('[1]')} --- Pionnière du genre`)
        displayStuff(`${chalk.blueBright('[2]')} --- Langage naturel`)
        break
      case 'adventure':
        require('../src/index').run()
        break
      default:
        break
    }

    displayStuff()
  })
}
