#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import { messages, settings } from './variables'

const init = () => {
    if (settings.oldstyle) console.log("Initialising...\n")
    console.log(
      chalk.green(
        figlet.textSync("Colossal Cave \n Adventure", {
            font: "Doom",
            horizontalLayout: "default",
            verticalLayout: "default"
        })
      )
    )
    console.log(messages.WELCOME_YOU)
}

export const run = () => {
    init()
}
