// src/filereader.js
const fs = require('fs');

class FileReader {
    readFile(filePath) {
        return fs.promises.readFile(filePath, 'utf-8');
    }
}

module.exports = FileReader;
