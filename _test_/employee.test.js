const Employee = require('../lib/employee');
const employee = new Employee('Mary','12345678','mary@email.com');

describe('employee', () => {
    it('object validation test', () => {
      expect(employee.name).toBe('Mary');
      expect(employee.id).toBe('12345678');
      expect(employee.email).toBe('mary@email.com');
    });

    it('get name method validation', () => {
        expect(employee.getName()).toBe('Mary');
    });

    
    it('get id method validation', () => {
        expect(employee.getId()).toBe('12345678');
    });
    
    it('get email method validation', () => {
        expect(employee.getEmail()).toBe('mary@email.com');
    });

    
    it('get role method validation', () => {
        expect(employee.getRole()).toBe('Employee');
    });
});
  
