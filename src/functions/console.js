#!/usr/bin/env node
import readline from 'readline'
import chalk from 'chalk'
import figlet from 'figlet'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export function consoleInput(question, callback) {
  rl.question(question, answer => {
    callback(answer)
    rl.resume()
  })
}

export function display(string) {
  rl.write(format(string))
}

export function displayLine(string) {
  rl.write(`\n${string}\n`)
}

export function format(string) {
  return `\n${string}\n\n`
}

export function displayTitle() {
  console.log(
    chalk.green(
      figlet.textSync('Colossal Cave \n Adventure', {
        font: 'Doom',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  )
}
