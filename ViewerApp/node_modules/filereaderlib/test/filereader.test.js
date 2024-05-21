const fs = require('fs');
const FileReader = require('../src/filereader');

// Mock fs.promises.readFile
jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

test('reads file content', async () => {
  const filePath = 'test.txt';
  const fileContent = 'Hello, World!';
  
  // Mock implementation of readFile
  fs.promises.readFile.mockResolvedValue(fileContent);

  const fileReader = new FileReader();
  const content = await fileReader.readFile(filePath);

  expect(content).toBe(fileContent);
  expect(fs.promises.readFile).toHaveBeenCalledWith(filePath, 'utf8');
});
