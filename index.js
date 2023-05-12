const fs = require('fs');
const inquirer = require('inquirer');
const webpage = require('./src/webpage');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

const welcomeMessage = [
    {
        type: 'list',
        name: 'welcome',
        message: "Welcome! To start building your team profile, please add a team manager.",
        choices: ['Ok']        
    }      
];  

function startApp(){
    inquirer
    .prompt(welcomeMessage)    
    .then(response => {
        if(response.welcome === 'Ok'){
            managerChoice()
        }
    })     
};

//initializes app - requires that a manager be added first
startApp();

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's full name?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }          
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an office number');
                return false;
            }
        }        
    }    
];

//creates manager object and adds it to the team array, then calls the function to add team members
function managerChoice(){
    inquirer
     .prompt(managerQuestions)
     .then(response => {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);  
        team.push(newManager);
        add();       
     })   
};


const addQuestion = [
    {
        type: 'list',
        name: 'add',
        message: 'Would you like to add a team member?',
        choices: ['Yes', 'No, my team is complete']             
    }            
];

//if the user wants to add a team member, they are taken to a function to choose what kind
//if the user is done adding team members, that data is pushed to the helper js file to convert it to html, and then that data is pushed to the writeFile function
function add() {
    inquirer
     .prompt(addQuestion)
     .then(response => {
        if(response.add === 'Yes'){chooseRole()}
        else {let profile = webpage(team);
        writeToFile(profile)}
     }   
    )                
};

const roleQuestion = [
    {
        type: 'list',
        name: 'role',
        message: "What is the title of the employee you'd like to add?",
        choices: ['Engineer', 'Intern']       
    }      
];   

function chooseRole() {
    inquirer
        .prompt(roleQuestion)             
        .then(response => {   
           if(response.role === 'Engineer') {
                engineerChoice();
            } else if(response.role === 'Intern') {
                internChoice();
            } 
        });
};

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's full name?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineers's employee ID?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }          
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github profile name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a github profile name');
                return false;
            }
        }        
    }    
];

//creates engineer object and adds it to the team array, then calls the function to add a team member
function engineerChoice(){
    inquirer
     .prompt(engineerQuestions)
     .then(response => {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);  
        team.push(newEngineer); 
        add();                 
    })         
};

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's full name?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }          
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does the intern go to school?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a school');
                return false;
            }
        }        
    }    
];

//creates intern object and adds it to the team array, then calls the function to add a team member
function internChoice(){
    inquirer
     .prompt(internQuestions)
     .then(response => {
        const newIntern = new Intern(response.name, response.id, response.email, response.school);   
        team.push(newIntern);   
        add();                
    })       
};

//takes data from helper js page and writes it to a new html page to render the finished product
function writeToFile(data) {        
    fs.writeFile('./dist/index.html', data, (err) =>
    err ? console.log(err) : console.log("Your team profile has been created!")
    )
};
