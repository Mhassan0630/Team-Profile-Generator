const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a manager object', () => {
  const manager = new Manager('John', 1, 'test@test.com', 101);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's role", () => {
  const manager = new Manager('John', 1, 'test@test.com', 101);

  expect(manager.getRole()).toEqual('Manager');
});

