const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const render = require("./src/page-template");

const teamMembers = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter an office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      addTeamMember();
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your engineer's employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        }
      }
    ])
  }
  //creates intern object and adds it to the team array, then calls the function to add a team member
  function internChoice() {
    inquirer
      .prompt(internQuestions)
      .then(response => {
        const newIntern = new Intern(response.name, response.id, response.email, response.school);
        team.push(newIntern);
        add();
      })
  }

  
