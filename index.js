const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

function init() {
  createManager();
}

function createManager() {
  console.log("Let's build your team");

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's ID?",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamArray.push(manager);
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'memberChoice',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          generateTeam();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's ID?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamArray.push(engineer);
      createTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the intern's ID?",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamArray.push(intern);
      createTeam();
    });
}

function generateTeam() {
  // Generate the HTML
}
