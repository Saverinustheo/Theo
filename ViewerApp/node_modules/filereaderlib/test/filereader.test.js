// test/filereader.test.js
const FileReader = require('../src/filereader');
const fs = require('fs');
jest.mock('fs');

test('reads file content', async () => {
    const filePath = 'test.txt';
    const fileContent = 'Hello, World!';
    fs.promises.readFile.mockResolvedValue(fileContent);

    const fileReader = new FileReader();
    const content = await fileReader.readFile(filePath);
    expect(content).toBe(fileContent);
});
