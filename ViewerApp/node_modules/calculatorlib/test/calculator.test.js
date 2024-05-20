// test/calculator.test.js
const Calculator = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 2)).toBe(3);
});

test('throws error on divide by zero', () => {
    const calculator = new Calculator();
    expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
});
