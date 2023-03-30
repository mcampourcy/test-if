import chalk from 'chalk'
import figlet from 'figlet'

console.log(
    chalk.greenBright(
        figlet.textSync('Colossal Cave Adventure', {
            font: 'Doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }),
    ),
)
