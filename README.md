

# Team-Profile-Generator

## Module 10: Object-Oriented Programming Challenge: Team Profile Generator
   To Create a Node.js command-line program that can generate an HTML webpage containing employee details fr a software engineeriing. This project requirements iincluded utilizing the inquirer package, writiingunit tests with hJest and ensuring that theyy all pass.
   1. The applicatioin should take input from the command line to collect information abot each employee.
   2. The program should start by gatheriiing information abaout the team manager and then proceed to ask prompts for adding engneers or interns until the team is complete.
   3. The employee class should have common properties, and specific classes(engineer, manager, intern) should extend the employyee class. When the webpage is created, the email and github links must be clickable.




## Table Of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Process Highlights](#process-highlights)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
Inquirer, Node.js, Jest, npm.

## Usage
Here are the steps for the Node.js command-line application to generate an HTML webpage with employee information for a software engineering company:

1. The app starts by adding a team manager first.
2. The manager questions ask for name, employee id, email      address, and office number.
3. The user can choose to add an engineer or intern team member.
4. For engineers, the user provides name, employee id, email address, and GitHub profile name.
5. For interns, the user provides name, employee id, email address, and school.
6. After each team member's questions are answered, the user can choose to add another team member.
7. When the user is finished adding team members, the webpage generates with clickable email and Github links.
8. The app runs unit tests (using Jest) to ensure that the Employee class and the classes that extend it (Manager, Engineer, Intern) have the specified properties and methods that function correctly.

## Tests
To perform testing, utilize Jest. Install by entering "npm i" in the terminal, and execute tests by entering "npm run test".

## Questions
Feel free to contact me at muntaas.hassan@gmail.com 