// src/FileReaderLib.js
const fs = require('fs').promises;

class FileReader {
  async readFile(filePath) {
    return await fs.readFile(filePath, 'utf8');
  }
}

module.exports = FileReader;
