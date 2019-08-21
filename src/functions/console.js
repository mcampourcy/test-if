#!/usr/bin/env node
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export function consoleInput(question, callback) {
  rl.question(question, (answer) => {
    callback(answer)
    rl.resume()
  })
}

export function display(string) {
  console.log(format(string))
}

export function displayLine(string) {
  console.log(`\n${string}\n`)
}

export function format(string) {
  return `\n${string}\n\n`
}
