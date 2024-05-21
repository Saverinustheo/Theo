// src/viewer.js
const Calculator = require('CalculatorLib');
const FileReader = require('FileReaderLib');

class Viewer {
    constructor() {
        this.calculator = new Calculator();
        this.fileReader = new FileReader();
    }

    async displayFileContent(filePath) {
        try {
            const content = await this.fileReader.readFile(filePath);
            console.log('File Content:', content);
        } catch (error) {
            console.error('Error reading file:', error);
        }
    }

    displaySum(a, b) {
        const sum = this.calculator.add(a, b);
        console.log('Sum:', sum);
    }
}

module.exports = Viewer;
