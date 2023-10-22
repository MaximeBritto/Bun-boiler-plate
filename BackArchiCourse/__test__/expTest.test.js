const expTest = require('../expTest.js');

test('adds 1 + 2 to equal 3', () => {
  expect(expTest(1, 2)).toBe(3);
});