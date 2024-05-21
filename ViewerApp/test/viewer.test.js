const CalculatorLib = require('../../CalculatorLib/src/calculator');
const FileReaderLib = require('../../FileReaderLib/src/filereader');

jest.mock('../../CalculatorLib/src/calculator');
jest.mock('../../FileReaderLib/src/filereader');

test('displays file content', async () => {
  const mockAdd = jest.fn().mockReturnValue(3);
  CalculatorLib.add = mockAdd;

  const mockReadFile = jest.fn().mockResolvedValue('file content');
  FileReaderLib.readFile = mockReadFile;

  const result = await FileReaderLib.readFile('dummyPath');
  expect(result).toBe('file content');
  expect(CalculatorLib.add(1, 2)).toBe(3);
  expect(mockAdd).toHaveBeenCalledWith(1, 2);
});
