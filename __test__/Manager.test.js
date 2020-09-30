const Manager = require('../lib/Manager.js');

test('creates a manager object', () =>
{
    const manager = new Manager('Stan', '00', 'stan@manager.io', '101');

    expect(manager.name).toBe('Stan');
    expect(manager.id).toBe('00');
    expect(manager.email).toBe('stan@manager.io');
    expect(manager.office).toBe('101');
});

test('gets office number of manager', () =>
{
    const manager = new Manager('Stan', '00', 'stan@manager.io', '101');

    expect(manager.getOffice()).toBe('101');
});