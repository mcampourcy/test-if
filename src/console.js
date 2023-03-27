import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

export function consoleInput(question, cb) {
    rl.question(question, (answer) => {
        rl.resume()
        cb(answer)
    })
}

export function displayText(string) {
    console.log(`\n${string}\n\n`)
}

export function displayLine(string) {
    console.log(`\n${string}\n`)
}

export function format(string) {
    return `\n${string}\n\n`
}
