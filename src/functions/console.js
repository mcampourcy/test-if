#!/usr/bin/env node
import readline from 'readline'

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
