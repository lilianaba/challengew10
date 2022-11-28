const Engineer = require('../lib/engineer');
const engineer = new Engineer('Mary','12345678','mary@email.com', 'marydoe');

describe('engineer', () => {
    it('object validation test', () => {
      expect(engineer.name).toBe('Mary');
      expect(engineer.id).toBe('12345678');
      expect(engineer.email).toBe('mary@email.com');
      expect(engineer.gitHub).toBe('marydoe');
    });

    it('get name method validation', () => {
        expect(engineer.getName()).toBe('Mary');
    });

    it('get id method validation', () => {
        expect(engineer.getId()).toBe('12345678');
    });
    
    it('get email method validation', () => {
        expect(engineer.getEmail()).toBe('mary@email.com');
    });

    it('get GitHub username method validation', () => {
        expect(engineer.getGitHub()).toBe('marydoe');
    });

    it('get role method validation', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});