const Intern = require('../lib/Intern');

describe('Testing all Intern class', () => {
    it('school property is required.', () => {
        const schoolTest = 'University';        
        const newIntern = new Intern('', '', '', schoolTest);
        expect(newIntern.school).toBe(schoolTest);
    });

    it('should give school using getSchool method', () => {
        const schoolTest = 'University';
        const newIntern = new Intern('', '', '', schoolTest);             
        expect(newIntern.getSchool()).toBe(schoolTest);
    });  

    it('should return Intern with getRole method', () => {  
        const newIntern = new Intern();
        expect(newIntern.getRole()).toBe('Intern');
    });

}); 