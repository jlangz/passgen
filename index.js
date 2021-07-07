// Requirements
const program = require('commander')
const chalk = require("chalk")
const clippy = require("clipboardy")
const createPassword = require("./utils/createPassword.js")
const savePassword = require("./utils/savePassword.js")
const removePassword = require("./utils/removePassword.js")
const removePasswords = require("./utils/removePasswords.js")

// Set options for users to see
program.version('1.0.1').description('Password Generator')


// Set options
program
.option('-l, --length <length>', "Length of password", '8')
.option('-a, --amount <amount>', "Amount of passwords generated", "1")
.option('-s, --save [filename]', "Save password to password.txt or custom name if given")
.option('-r, --remove <filename>', "Remove a specific file")
.option('-ft, --filetype <type>', "What filetype should the passwords be saved in?", "txt")
.option('-da, --delete-all', "Delete all password files")
.option('-nn, --no-numbers', "No numbers")
.option('-ns, --no-symbols', "No symbols")
.option('-nu, --no-upper', "No capital letters")
.option('-nl, --no-lower', "No lowercase letters")


program.parse(process.argv)

// Set options as constants
const { length, amount, save, remove, filetype, deleteAll, numbers, symbols, upper, lower } = (program.opts())

if(save == 1){
    var filename = "passwords"
}else{
    var filename = save
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

if(deleteAll){
    console.log("Deleting all passwords files in 5 seconds... CTRL+C to abort")
    wait(5000)
    removePasswords()
    console.log("Deleted!")
    process.exit(1)
}

if(remove){
    removePassword(remove)
    process.exit(1)
}

// Check for if all flags are set
if (!lower && !upper && !symbols && !numbers){
    console.log("You need at least one type of symbols to create a password, please try again with fewer flags")
    process.exit(1)
}

// Get generated password
if( amount == 1 ){
    var generatedPassword = createPassword(length, numbers, symbols, upper, lower);
    // Copy to clipboard
    clippy.writeSync(generatedPassword);

    // Output generated password
    console.log(chalk.blue("Your password: ") + chalk.bold(generatedPassword));
    console.log(chalk.yellow("Password copied to clipboard"));
}if(amount > 1){
    var list_of_passwords = []
    for(let i = 0; i < amount; i++){
        pass = createPassword(length, numbers, symbols, upper, lower)
        list_of_passwords.push(pass)
        console.log("Password #" + String(i+1) + " generated: " + pass)
    };
    
};

// Save to file if the save flag is set
if(save) {
    savePassword(generatedPassword || list_of_passwords, filetype, filename)
}