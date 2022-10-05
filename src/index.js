import chalk from 'chalk'
import figlet from 'figlet'
import { getInstructions } from './global'

export function run() {
  console.log(chalk.greenBright(figlet.textSync('Colossal Cave Adventure', {
    font: 'Doom',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  })))

  getInstructions()
}
