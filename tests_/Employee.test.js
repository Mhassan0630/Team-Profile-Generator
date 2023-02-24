const Employee = require('../lib/Employee');

describe('Employee', () => {
  // Test for instantiation
  describe('initialization', () => {
    it('should create an object with a name, id, and email if provided with valid arguments', () => {
      const employee = new Employee('Dave', 1, 'dave@company.com');

      expect(employee.name).toEqual('Dave');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('dave@company.com');
    });

    it('should throw an error if provided with no arguments', () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it('should throw an error if "name" is not a string', () => {
      const cb = () => new Employee(1, 1, 'dave@company.com');

      expect(cb).toThrow();
    });

    it('should throw an error if "id" is not a number', () => {
      const cb = () => new Employee('Dave', 'one', 'dave@company.com');

      expect(cb).toThrow();
    });

    it('should throw an error if "email" is not a string', () => {
      const cb = () => new Employee('Dave', 1, 123);

      expect(cb).toThrow();
    });
  });

  describe('getName', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('Dave', 1, 'dave@company.com');

      expect(employee.getName()).toEqual('Dave');
    });
  });

  describe('getId', () => {
    it('should return the ID of the employee', () => {
      const employee = new Employee('Dave', 1, 'dave@company.com');

      expect(employee.getId()).toEqual(1);
    });
  });

  describe('getEmail', () => {
    it('should return the email address of the employee', () => {
      const employee = new Employee('Dave', 1, 'dave@company.com');

      expect(employee.getEmail()).toEqual('dave@company.com');
    });
  });

  describe('getRole', () => {
    it('should return the role of the employee as "Employee"', () => {
      const employee = new Employee('Dave', 1, 'dave@company.com');

      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
