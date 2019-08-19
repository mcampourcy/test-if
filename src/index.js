#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import { messages, settings } from './variables'
import { readAndAnswer } from './functions/console'
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
  const question = settings.repeat ? null : welcomeYou
  settings.repeat = false
  readAndAnswer(question, (answer) => {
    if (yes_answer.includes(answer)) {
      console.log(`\n${caveNearby}`)
      doSomething()
    } else if (no_answer.includes(answer)) {
      settings.novice = false
      doSomething()
    } else {
      console.log(`\n${pleaseAnswer}\n`)
      settings.repeat = true
      displayInstructions()
    }
  })
}
