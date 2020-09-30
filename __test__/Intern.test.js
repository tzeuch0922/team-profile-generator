const Intern = require('../lib/Intern.js');

test('creates an intern object', () =>
{
    const intern = new Intern('Diane', '03', 'diane@intern.io', 'OCU');

    expect(intern.name).toBe('Diane');
    expect(intern.id).toBe('03');
    expect(intern.email).toBe('diane@intern.io');
    expect(intern.school).toBe('OCU');
});

test('gets school of intern', () =>
{
    const intern = new Intern('Diane', '03', 'diane@intern.io', 'OCU');

    expect(intern.getSchool()).toBe('OCU');
});