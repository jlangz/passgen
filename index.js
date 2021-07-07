const program = require('commander')
const chalk = require("chalk")
const clippy = require("clipboardy")
const createPassword = require("./utils/createPassword.js")
const savePassword = require("./utils/savePassword.js")

program.version('1.0.0').description('Password Generator')

program
.option('-l --length <length>', "Length of password", '8')
.option('-s --save', "Save password to password.txt")
.option('-nn --no-numbers', "Remove numbers")
.option('-ns --no-symbols', "Remove symbols")
.parse()

const { length, save, numbers, symbols } = (program.opts())

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file

if(save) {
    savePassword(generatedPassword)
}


// Copy to clipboard
clippy.writeSync(generatedPassword)

// Output generated password
console.log(chalk.blue("Your password: ") + chalk.bold(generatedPassword))
console.log(chalk.yellow("Password copied to clipboard"))