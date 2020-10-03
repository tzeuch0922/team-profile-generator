// Required libraries
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHtml = require('./lib/PageGenerator.js');

// Question for picking engineer, intern, or finish.
const choicePrompt = 
[
    {
        type: 'list',
        name: 'choice',
        message: 'What is your next employee?',
        choices: ['Engineer', 'Intern', 'Finish']
    }
];

// Questions asked for managers.
const managerPrompt = 
[
    {
        type: 'input',
        name: 'name',
        message: "What's the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What's the manager's employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the manager's email?"
    },
    {
        type: 'input',
        name: 'office',
        message: "What's the managers' office number?"
    }
];

// Questions asked for engineers.
const engineerPrompt = 
[
    {
        type: 'input',
        name: 'name',
        message: "What's the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What's the engineer's employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What's the engineer's github username?"
    }
];

// Questions asked for interns.
const internPrompt = 
[
    {
        type: 'input',
        name: 'name',
        message: "What's the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What's the intern's employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What's the intern's school?"
    }
];

// List of employees.
var employees = [];

// Ask for engineer intern or finish.
function pickChoice()
{
    inquirer.prompt(choicePrompt).then((answer) =>
    {
        if(answer.choice === 'Engineer')
        {
            askEngineer();
        }

        else if(answer.choice === "Intern")
        {
            askIntern();
        }

        else if(answer.choice === "Finish")
        {
            generateHtml(employees);
        }
    });
}

// Ask engineer questions.
function askEngineer()
{
    inquirer.prompt(engineerPrompt).then((answer) =>
    {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        employees.push(engineer);
        pickChoice();
    });
}

// Ask intern questions.
function askIntern()
{
    inquirer.prompt(internPrompt).then((answer) =>
    {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        employees.push(intern);
        pickChoice();
    });
}

inquirer.prompt(managerPrompt).then((answers) =>
{
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
    employees.push(manager);
    pickChoice();
});