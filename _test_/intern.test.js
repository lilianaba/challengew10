const Intern = require('../lib/intern');
const intern =  new Intern('Mary','12345678','mary@email.com', 'BootcampUADEL');

describe('intern', () => {
    it('object validation test', () => {
      expect(intern.name).toBe('Mary');
      expect(intern.id).toBe('12345678');
      expect(intern.email).toBe('mary@email.com');
      expect(intern.school).toBe('BootcampUADEL');
    });

    it('get name method validation', () => {
        expect(intern.getName()).toBe('Mary');
    });

    it('get id method validation', () => {
        expect(intern.getId()).toBe('12345678');
    });
    
    it('get email method validation', () => {
        expect(intern.getEmail()).toBe('mary@email.com');
    });

    it('get school username method validation', () => {
        expect(intern.getSchool()).toBe('BootcampUADEL');
    });

    it('get role method validation', () => {
        expect(intern.getRole()).toBe('Intern');
    });
});