#!/usr/bin/env node
const chalk = require("chalk")
const figlet = require("figlet")
const shell = require("shelljs")



const init = () => {
    const questions = [
        {
            name: "FILENAME",
            type: "input",
            message: "What is the name of the file without extension?"
        },
        {
            type: "list",
            name: "EXTENSION",
            message: "What is the file extension?",
            choices: [".rb", ".js", ".php", ".css"],
            filter: function(val) {
                return val.split(".")[1];
            }
        }
    ];
    return inquirer.prompt(questions);
};

export const run = () => {
    console.log(
      chalk.green(
        figlet.textSync("Node f*cking JS", {
            font: "Ghost",
            horizontalLayout: "default",
            verticalLayout: "default"
        })
      )
    )
    // show script introduction
    init();
};
