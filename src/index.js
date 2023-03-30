import chalk from 'chalk'
import figlet from 'figlet'
import { getInstructions } from './global.js'

export function runAdventure() {
    console.log(
        chalk.greenBright(
            figlet.textSync('Colossal Cave Adventure', {
                font: 'Doom',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            }),
        ),
    )

    getInstructions()
}
