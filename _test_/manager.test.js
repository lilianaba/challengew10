const Manager = require('../lib/manager');
const manager = new Manager('Mary','12345678','mary@email.com', '203');

describe('manager', () => {
    it('object validation test', () => {
      expect(manager.name).toBe('Mary');
      expect(manager.id).toBe('12345678');
      expect(manager.email).toBe('mary@email.com');
      expect(manager.officeNum).toBe('203');
    });

    it('get name method validation', () => {
        expect(manager.getName()).toBe('Mary');
    });

    
    it('get id method validation', () => {
        expect(manager.getId()).toBe('12345678');
    });
    
    it('get email method validation', () => {
        expect(manager.getEmail()).toBe('mary@email.com');
    });

    it('get office number method validation', () => {
        expect(manager.getOfficeNum()).toBe('203');
    });

    it('get role method validation', () => {
        expect(manager.getRole()).toBe('Manager');
    });
});
  
