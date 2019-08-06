#!/usr/bin/env node
import chalk from 'chalk'
import figlet from 'figlet'
import inquirer from 'inquirer'
import { messages } from './variables'

const init = () => {
    const questions = [
        {
            name: "INSTRUCTIONS",
            type: "input",
            message: messages.WELCOME_YOU,
        }
    ]
    return inquirer.prompt(questions);
};

export const run = () => {
    console.log(
      chalk.green(
        figlet.textSync("Colossal Cave \n Adventure", {
            font: "Doom",
            horizontalLayout: "default",
            verticalLayout: "default"
        })
      )
    )
    init()
}
