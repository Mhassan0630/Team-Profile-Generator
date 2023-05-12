const Manager = require('../lib/Manager');

describe('Test all Manager class', () => {
    it('Office number property is required', () => {
        const officeNumberTest = 5;        
        const newManager = new Manager('', '', '', officeNumberTest );
        expect(newManager.officeNumber).toBe(officeNumberTest);
    });

    it('The getOfficeNumber method should be employed to retrieve the office number.', () => {
        const officeNumberTest = 5;        
        const newManager = new Manager('', '', '', officeNumberTest);
        expect(newManager.getOfficeNumber()).toBe(officeNumberTest);
    });

    it('The getRole method should yield the designation of Manager', () => {  
        const newManager = new Manager();
        expect(newManager.getRole()).toBe('Manager');
    });

}); 
