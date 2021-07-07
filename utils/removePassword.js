const fs = require("fs")
const path = require("path")
const os = require('os')
const chalk = require("chalk")

const removePassword = (remove) => {
    directory = path.join(__dirname, '../passwords/')
    try {
        fs.unlinkSync(directory + remove)
        console.log("Successfully deleted " + remove)
    }catch(err) {
        throw err
    }
}
module.exports = removePassword