// Requirements
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_-+='

// Create password function, P.S. default values are redundantly set here as well.
const createPassword = (length = 8 , hasNumbers = true, hasSymbols = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ""
    hasSymbols ? (chars += symbols) : ""
    // Generate password based on what symbols, numbers and characters are available
    return generatePassword(length, chars)
}

const generatePassword = (length, chars) => {
    let password = ""
    // P.S. length is the length of the password
    for(let i = 0; i < length; i++) {
        // Randomize the selection of a character in the total available characters
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports =  createPassword