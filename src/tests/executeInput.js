const { spawn } = require('child_process')
const { existsSync } = require('fs')

function executeInput(processPath, inputs = []) {
  if (!processPath || !existsSync(processPath)) {
    throw new Error('Process not found')
  }

  if (!Array.isArray(inputs) && !inputs.length) {
    throw new Error('Input are in not correct format')
  }

  const timeout = 100

  const childProcess = spawn('node', [processPath])
  let result = ''
  let logs = ''

  const iterate = (inputs) => {
    if (!inputs.length) {
      childProcess.stdin.end()
      return
    }

    setTimeout(() => {
      const ENTER = '\x0D'
      childProcess.stdin.write(`${inputs[0]}${ENTER}`)
      logs += `${inputs[0]}\n`
      iterate(inputs.slice(1))
    }, timeout)
  }

  const promise = new Promise((resolve, reject) => {
    // Get errors from CLI
    childProcess.stderr.on('data', processData => console.log('error:', processData.toString()))

    // Get output from CLI
    childProcess.stdout.on('data', (processData) => {
      result += processData.toString()
      logs += processData.toString()

      setTimeout(() => {
        resolve(result)
      }, 400)
    })

    childProcess.stderr.once('data', (err) => {
      childProcess.stdin.end()
      reject(err.toString())
    })

    childProcess.on('error', reject)

    // Kick off the process
    iterate(inputs, resolve)
  })

  // Appending the process to the promise, in order to
  // add additional parameters or behavior (such as IPC communication)
  promise.attachedProcess = childProcess

  return promise
}

module.exports = {
  executeInput,
}
