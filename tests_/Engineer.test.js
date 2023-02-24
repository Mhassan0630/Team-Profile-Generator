const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
  const engineer = new Engineer('John', 1, 'test@test.com', 'testusername');

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's GitHub username", () => {
  const engineer = new Engineer('John', 1, 'test@test.com', 'testusername');

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
  const engineer = new Engineer('John', 1, 'test@test.com', 'testusername');

  expect(engineer.getRole()).toEqual('Engineer');
});
