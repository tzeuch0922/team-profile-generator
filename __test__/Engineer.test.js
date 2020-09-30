const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () =>
{
    const engineer = new Engineer('Joe', '01', 'joe@engineer.io', 'JoeJoe');

    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toBe('01');
    expect(engineer.email).toBe('joe@engineer.io');
    expect(engineer.github).toBe('JoeJoe');
});

test('gets github username of engineer', () =>
{
    const engineer = new Engineer('Joe', '01', 'joe@engineer.io', 'JoeJoe');

    expect(engineer.getGithub()).toBe('JoeJoe');
});