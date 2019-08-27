#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import { messages, settings } from './variables'
import { display, format, consoleInput, displayLine } from './functions/console'
import { doSomething } from './functions/global'

export function run() {
  displayTitle()
  displayInstructions()
}

const yes_answer = ['y', 'yes']
const no_answer = ['n', 'no']

function displayTitle() {
  console.log(
    chalk.green(
      figlet.textSync("Colossal Cave \n Adventure", {
        font: "Doom",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  )
}

function displayInstructions() {
  const { caveNearby, pleaseAnswer, welcomeYou } = messages
  const question = settings.repeat ? null : format(welcomeYou)
  settings.repeat = false

  consoleInput(question, input => {
    const answer = input.trim()
    if (yes_answer.includes(answer)) {
      display(caveNearby)
      doSomething()
    } else if (no_answer.includes(answer)) {
      settings.novice = false
      doSomething()
    } else {
      displayLine(pleaseAnswer)
      settings.repeat = true
      displayInstructions()
    }
  })
}
