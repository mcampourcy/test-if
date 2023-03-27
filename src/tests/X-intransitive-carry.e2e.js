const path = require('path')
const childProcess = require('child_process')
const { executeInput } = require('./executeInput.js')
const { text, answers } = require('./scenarios/X-intransitive-carry.json')

describe('Scenario for instructions at the beginning', () => {
    let welcomeScreen

    beforeAll(() => {
        welcomeScreen = childProcess.execFileSync('node', [
            path.join(__dirname, 'welcomeScreen.js'),
        ])
    })

    it('should display instructions on yes', async () => {
        const response = await executeInput(
            path.join(__dirname, '/../../bin', 'adventure.js'),
            answers,
        )
        const scenario = `${welcomeScreen}\n${text.join('\n')}\n\n`

        expect(response.toString()).toEqual(scenario)
    })
})
