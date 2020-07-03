'use strict'

const path = require('path')
const childProcess = require('child_process')
const { executeInput } = require('../executeInput.js')
const { text, error } = require('./scenarios/1-locStart.json')

describe('Routes from locStart', () => {
  let welcomeScreen

  beforeAll(() => {
    welcomeScreen = childProcess.execFileSync('node', [path.resolve(__dirname, '../welcomeScreen.js')])
  })

  it('should display instructions on yes', async () => {
    const result = await executeInput(path.resolve(__dirname, '../../../bin', 'adventure.js'), ['yes'])
    const scenario = `${welcomeScreen}\n${text.intro}\n\n${text.yes}\n\n${text.end}\n\n`
    expect(result.toString()).toEqual(scenario)
  })

  it('should not display instructions on no', async () => {
    const result = await executeInput(path.resolve(__dirname, '../../../bin', 'adventure.js'), ['no'])
    const scenario = `${welcomeScreen}\n${text.intro}\n\n${text.end}\n\n`

    expect(result.toString()).toEqual(scenario)
  })

  it('should ask again if neither yes or no', async () => {
    const result = await executeInput(path.resolve(__dirname, '../../../bin', 'adventure.js'), ['maybe, but not sure...'])
    const scenario = `${welcomeScreen}\n${error.join('\n\n')}\n\n`

    expect(result.toString()).toEqual(scenario)
  })
})
