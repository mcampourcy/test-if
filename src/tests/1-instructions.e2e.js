import path from 'path'
import childProcess from 'child_process'
import { executeInput } from './executeInput.js'
import instructions from './scenarios/1-instructions.json'

const { text, error } = instructions

describe('Would you like instructions?', () => {
    let welcomeScreen

    beforeAll(() => {
        welcomeScreen = childProcess.execFileSync('node', [
            path.resolve('./src/tests/welcomeScreen.js'),
        ])
    })

    it('should display instructions on yes', async () => {
        const result = await executeScript(['yes'])
        const scenario = `${welcomeScreen}\n${text.intro}\n\n${text.yes}\n\n${text.end}\n\n`

        expect(result.toString()).toEqual(scenario)
    })

    it('should not display instructions on no', async () => {
        const result = await executeScript(['no'])
        const scenario = `${welcomeScreen}\n${text.intro}\n\n${text.end}\n\n`

        expect(result.toString()).toEqual(scenario)
    })

    it('should ask again if neither yes or no', async () => {
        const result = await executeScript(['maybe, but not sure...'])
        const scenario = `${welcomeScreen}\n${error.join('\n\n')}\n\n`

        expect(result.toString()).toEqual(scenario)
    })
})

function executeScript(args) {
    return executeInput(
        path.resolve('./bin', 'adventure.js'),
        args,
    )
}
