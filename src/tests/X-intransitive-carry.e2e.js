import path from 'path'
import childProcess from 'child_process'
import { executeInput } from './executeInput.js'
import intransitive from './scenarios/X-intransitive-carry.json'

const { text, answers } = intransitive

describe('Scenario for instructions at the beginning', () => {
    let welcomeScreen

    beforeAll(() => {
        welcomeScreen = childProcess.execFileSync('node', [
            path.resolve('./src/tests/welcomeScreen.js'),
        ])
    })

    it('should display instructions on yes', async () => {
        const response = await executeInput(
            path.resolve('./bin', 'adventure.js'),
            answers,
        )
        const scenario = `${welcomeScreen}\n${text.join('\n')}\n`

        expect(response.toString()).toEqual(scenario)
    })
})
