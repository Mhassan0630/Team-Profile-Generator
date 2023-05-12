const Engineer = require('../lib/Engineer');

describe('Testing entire Engineer class', () => {
    it('Have a github property', () => {
        const githubTest = 'github/mhassan0630';        
        const newEngineer = new Engineer('', '', '', githubTest );
        expect(newEngineer.github).toBe(githubTest);
    });

    it('getGithub method should be utilized to obtain the GitHub access.', () => {
        const githubTest = 'github/mhassan0630';        
        const newEngineer = new Engineer('', '', '', githubTest );
        expect(newEngineer.getGithub()).toBe(githubTest);
    });  

    it('should return Engineer with getRole method', () => {  
        const newEngineer = new Engineer();
        expect(newEngineer.getRole()).toBe('Engineer');
    });

}); 