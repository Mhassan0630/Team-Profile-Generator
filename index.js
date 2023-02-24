const intern = new Intern(
  answers.name,
  answers.id,
  answers.email,
  answers.school
);
teamMembers.push(intern);
addTeamMember();
});
};

const addTeamMember = () => {
return inquirer
.prompt([
{
  type: "list",
  name: "memberChoice",
  message: "What type of team member would you like to add?",
  choices: ["Engineer", "Intern", "I don't want to add any more team members"],
},
])
.then((userChoice) => {
switch (userChoice.memberChoice) {
  case "Engineer":
    addEngineer();
    break;
  case "Intern":
    addIntern();
    break;
  default:
    writeFile(teamMembers);
    break;
}
});
};

const writeFile = (data) => {
fs.writeFile("./dist/index.html", render(data), (err) => {
if (err) throw err;
console.log("Your team profile has been successfully generated!");
});
};

addManager();
