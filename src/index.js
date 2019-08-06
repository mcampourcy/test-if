#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import { prompt } from 'enquirer'
import { messages, settings } from './variables'

const yes_answer = ['y', 'yes']
const no_answer = ['n', 'no']

const init = () => {
  prompt([{
    name: 'answer',
    type: 'input',
    message: settings.repeat ? null : messages.WELCOME_YOU,
  }])
    .then(({ answer }) => {
      if (yes_answer.includes(answer)) {
        console.log(messages.CAVE_NEARBY)
        settings.repeat = true
      } else if (no_answer.includes(answer)) {
        //
        settings.repeat = true
        settings.novice = false
      } else {
        console.log(messages.PLEASE_ANSWER)
        settings.repeat = true
        init()
      }
    })
}

export const run = () => {
    // console.log(
    //   chalk.green(
    //     figlet.textSync("Colossal Cave \n Adventure", {
    //         font: "Doom",
    //         horizontalLayout: "default",
    //         verticalLayout: "default"
    //     })
    //   )
    // )
    init()
}
