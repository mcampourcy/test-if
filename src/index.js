#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import { locations, messages, settings } from './variables'
import readline from 'readline'

const yes_answer = ['y', 'yes']
const no_answer = ['n', 'no']

const introduction = () => {
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

const readAndAnswer = (question, callback) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question(`${question} \n\n`, (answer) => {
    rl.close()
    callback(answer)
  })
}

const getLocationDescription = (name) => {
  const description = locations[name].description
  return (description.short && settings.repeat) ? description.short : description.long
}

const gettingStarted = () => readAndAnswer(`\n\n${getLocationDescription('locStart')}`, () => console.log('start !'))

const init = () => {
  const { caveNearby, pleaseAnswer, welcomeYou } = messages
  const question = settings.repeat ? '' : welcomeYou
  readAndAnswer(question, (answer) => {
    if (yes_answer.includes(answer)) {
      console.log(`\n${caveNearby}`)
      gettingStarted()
    } else if (no_answer.includes(answer)) {
      settings.novice = false
      gettingStarted()
    } else {
      console.log(`\n${pleaseAnswer}`)
      settings.repeat = true
      init()
    }
  })
}

export const run = () => {
    introduction()
    init()
}
