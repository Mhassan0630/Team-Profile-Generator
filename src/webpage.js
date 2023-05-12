
// Receives the team array, initiates functions, and returns HTML to be written into a new file.
const webpageRender = team => {     
     
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Document</title>
</head>
<body>
  <header class="bg-red-500 text-white py-10 mx-5 text-5xl text-center">
      <h1>My Team</h1>
  </header>

  <main id="cards" class="flex flex-row flex-wrap justify-center">
  ${managerSection(team)}
  ${engineerSection(team)}
  ${internSection(team)}
  </main>    
</body>
</html>  
      
  `  
}

// Each function processes the team array, isolates specific roles, generates corresponding HTML cards, and combines these cards into a single HTML section.
const managerSection = team => {
  let managerCard = '';
  for (i = 0; i < team.length; i++) {
      if(team[i].getRole() === 'Manager') {
          managerCard = manager(team[i])
      }       
  } return managerCard;
};

const engineerSection = team => {
  let engineerCards = '';
  for (i = 0; i < team.length; i++) {
      if(team[i].getRole() === 'Engineer') {
          engineerCards = engineerCards + engineer(team[i])
      }
  } return engineerCards;
};

const internSection = team => {
  let internCards = '';
  for (i = 0; i < team.length; i++) {
      if(team[i].getRole() === 'Intern') {
          internCards = internCards + intern(team[i])
      }
  } return internCards;
};

// These functions process the manager, engineer, and intern objects, which were iterated over in the previous steps, and output HTML with corresponding data.
const manager = managerInfo => {
  return `
  <section class="manager basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
  <h2 class="text-white bg-blue-600 p-5">
          <p class="name text-2xl">${managerInfo.getName()}</p>
          <p class="role text-xl">${managerInfo.getRole()}</p>
  </h2>
  <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: ${managerInfo.getId()}</p>
  <p class="email bg-white p-5 mx-5 my-2">Email: <a href="mailto:${managerInfo.getEmail()}">${managerInfo.getEmail()}</a></p>  
  <p class="officeNumber bg-white p-5 mx-5 mt-2 mb-10">Office number: ${managerInfo.getOfficeNumber()}</p>
</section>   
`
}

const engineer = engineerInfo => {
  return `
  <section class="engineer basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
  <h2 class="text-white bg-blue-600 p-5">
          <p class="name text-2xl">${engineerInfo.getName()}</p>
          <p class="role text-xl">${engineerInfo.getRole()}</p>
  </h2>
  <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: ${engineerInfo.getId()}</p>
  <p class="email bg-white p-5 mx-5 my-2">Email: <a href="mailto:${engineerInfo.getEmail()}">${engineerInfo.getEmail()}</a></p> 
  <p class="github bg-white p-5 mx-5 mt-2 mb-10">GitHub Profile: 
  <a href="https://www.github.com/${engineerInfo.getGithub()}" target="_blank">www.github.com/${engineerInfo.getGithub()}</a>
  </p> 
</section>   
`
}

const intern = internInfo => {
  return `
  <section class="intern basis-full md:basis-2/5 lg:basis-1/4 bg-gray-300 mx-5 my-10 shadow-xl shadow-gray-500/70">
  <h2 class="text-white bg-blue-600 p-5">
          <p class="name text-2xl">${internInfo.getName()}</p>
          <p class="role text-xl">${internInfo.getRole()}</p>
  </h2>
  <p class="id bg-white p-5 mx-5 mt-10 mb-2">ID: ${internInfo.getId()}</p>
  <p class="email bg-white p-5 mx-5 my-2">Email: <a href="mailto:${internInfo.getEmail()}">${internInfo.getEmail()}</a></p>  
  <p class="school bg-white p-5 mx-5 mt-2 mb-10">School: ${internInfo.getSchool()}</p>
</section>   
`
}

module.exports = webpageRender;