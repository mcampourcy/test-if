const chalk = require('chalk')
const figlet = require('figlet')

console.log(
    chalk.green(
        figlet.textSync('Colossal Cave \n Adventure', {
            font: 'Doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }),
    ),
)
