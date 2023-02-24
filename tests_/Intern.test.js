const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates an intern object', () => {
  const intern = new Intern('John', 1, 'test@test.com', 'test school');

  expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
  const intern = new Intern('John', 1, 'test@test.com', 'test school');

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
  const intern = new Intern('John', 1, 'test@test.com', 'test school');

  expect(intern.getRole()).toEqual('Intern');
});
