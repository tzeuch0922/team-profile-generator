const Employee = require('../lib/Employee.js');

test('creates an employee object', () =>
{
    const employee = new Employee('Dave', '01', 'dave@industry.io', 'generic');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('dave@industry.io');
    expect(employee.type).toBe('generic');
});

test('gets name of employee', () =>
{
    const employee = new Employee('Dave', '01', 'dave@industry.io', 'generic');

    expect(employee.getName()).toBe('Dave');
});

test('gets id of employee', () =>
{
    const employee = new Employee('Dave', '01', 'dave@industry.io', 'generic');

    expect(employee.getId()).toBe('01');
});

test('gets email of employee', () =>
{
    const employee = new Employee('Dave', '01', 'dave@industry.io', 'generic');

    expect(employee.getEmail()).toBe('dave@industry.io');
});

test('gets type of employee', () =>
{
    const employee = new Employee('Dave', '01', 'dave@industry.io', 'generic');

    expect(employee.getType()).toBe('generic');
});