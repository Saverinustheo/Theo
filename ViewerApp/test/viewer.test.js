// test/viewer.test.js
const Viewer = require('../src/viewer');
const Calculator = require('CalculatorLib');
const FileReader = require('FileReaderLib');

jest.mock('CalculatorLib');
jest.mock('FileReaderLib');

test('displays file content', async () => {
    const filePath = 'test.txt';
    const fileContent = 'Hello, World!';
    FileReader.prototype.readFile.mockResolvedValue(fileContent);

    const viewer = new Viewer();
    console.log = jest.fn();
    await viewer.displayFileContent(filePath);

    expect(console.log).toHaveBeenCalledWith('File Content:', fileContent);
});

test('displays sum of 1 and 2', () => {
    Calculator.prototype.add.mockReturnValue(3);

    const viewer = new Viewer();
    console.log = jest.fn();
    viewer.displaySum(1, 2);

    expect(console.log).toHaveBeenCalledWith('Sum:', 3);
});
