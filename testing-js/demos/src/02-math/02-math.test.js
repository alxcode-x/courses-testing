const { sum, multiply, divide } = require('./02-math');

test('1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('4 * 1 should be 4', () => {
  expect(multiply(4, 1)).toBe(4);
});

test('Should divide fot zero', () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();

  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});
