const path = require('path')
const childProcess = require('child_process')
const  { executeInput } = require('./executeInput.js')
const { text, error } = require('./scenarios/1-instructionsYES.json')

describe('Scenario for instructions at the beginning', () => {
  let welcomeScreen

  beforeAll(() => {
    welcomeScreen = childProcess.execFileSync('node', [path.join(__dirname, 'welcomeScreen.js')])
  })

  it('should display instructions on yes', async () => {
    const result = await executeInput(path.join(__dirname + '/../../bin', 'adventure.js'), ['yes'])
    const scenario = `${welcomeScreen}\n${text.join('\n\n')}\n\n`

    expect(result.toString()).toEqual(scenario)
  })

  it('should ask again if neither yes or no', async () => {
    const result = await executeInput(path.join(__dirname + '/../../bin', 'adventure.js'), ['maybe, but not sure...'])
    const scenario = `${welcomeScreen}\n${error.join('\n\n')}\n\n`

    expect(result.toString()).toEqual(scenario)
  })
})
