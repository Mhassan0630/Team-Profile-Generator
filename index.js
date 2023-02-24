// Importing necessary modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

// Array to hold team members
const teamArray = [];

// Prompt user to input team member data
const promptUser = () => {
  return inquirer.prompt([
    // prompts here
  ])
  .then(employeeData => {
    let { name, id, email, role, github, school, officeNumber } = employeeData;
    let employee;

    switch (role) {
      case 'Manager':
        employee = new Manager(name, id, email, officeNumber);
        break;
      case 'Engineer':
        employee = new Engineer(name, id, email, github);
        break;
      case 'Intern':
        employee = new Intern(name, id, email, school);
        break;
    }

    teamArray.push(employee);

    if (employeeData.confirmAddEmployee) {
      return promptUser();
    } else {
      return teamArray;
    }
  });
};
