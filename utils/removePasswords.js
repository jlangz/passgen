const fs = require("fs")
const path = require("path")
const os = require('os')
const chalk = require("chalk")
const fsExtra = require('fs-extra')

const removePasswords = async () => {
    directory = path.join(__dirname, '../passwords')
    fsExtra.emptyDirSync(directory)
}

module.exports = removePasswords