#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import readline from 'readline'

export function displayIntroduction() {
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

export function readAndAnswer(question, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const q = question ?`${question} \n\n` : ''
  rl.question(q, (answer) => {
    rl.close()
    callback(answer)
  })
}
