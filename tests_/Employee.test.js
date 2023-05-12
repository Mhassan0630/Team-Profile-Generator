const Employee = require('../lib/Employee');

describe('Test for entire Employee class', () => {
    it('should have a name property', () => {
        const nameTest = 'Muntaas';        
        const newEmployee = new Employee(nameTest, '', '' );
        expect(newEmployee.name).toBe(nameTest);
    });

    it('should have a id property', () => {
        const idTest = '1';        
        const newEmployee = new Employee('', idTest, '' );
        expect(newEmployee.id).toBe(idTest);
    });

    it('should have a email property', () => {
        const emailTest = 'muntaas.hassan@gmail.com';        
        const newEmployee = new Employee('', '', emailTest);
        expect(newEmployee.email).toBe(emailTest);
    });

    it('should give name using getName method', () => {
        const nameTest = 'muntaas';        
        const newEmployee = new Employee(nameTest, '', '' );
        expect(newEmployee.getName()).toBe(nameTest);
    });

    it('should give ID using getID method', () => {
        const idTest = '1';        
        const newEmployee = new Employee('', idTest, '' );
        expect(newEmployee.getId()).toBe(idTest);
    });

    it('should give email using getEmail method', () => {
        const emailTest = 'muntaas.hassan@gmail.com';        
        const newEmployee = new Employee('', '', emailTest);
        expect(newEmployee.getEmail()).toBe(emailTest);
    });

    it('should return Employee with getRole method', () => {      
        const newEmployee = new Employee();
        expect(newEmployee.getRole()).toBe('Employee');
    });

}); 