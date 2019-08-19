#!/usr/bin/env node
import readline from 'readline'

export function readAndAnswer(question, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const q = question ? question : ''
  rl.question(q, (answer) => {
    rl.close()
    callback(answer)
  })
}

export function display(string) {
  console.log(format(string))
}

export function format(string) {
  return `\n${string}\n\n`
}
