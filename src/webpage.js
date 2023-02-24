const fs = require('fs');

// Generate the HTML for the team roster page
function generateHTML(teamData) {
  // Begin the HTML document
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Roster</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      <div class="container">
  `;

  // Generate the HTML for each team member
  teamData.forEach((employee) => {
    // Get the employee's role and generate the corresponding HTML
    const role = employee.getRole();
    let employeeHTML = '';
    switch (role) {
      case 'Manager':
        employeeHTML = generateManagerHTML(employee);
        break;
      case 'Engineer':
        employeeHTML = generateEngineerHTML(employee);
        break;
      case 'Intern':
        employeeHTML = generateInternHTML(employee);
        break;
    }
    // Add the employee HTML to the overall HTML
    html += employeeHTML;
  });

  // Finish the HTML document
  html += `</div>
    </main>
  </body>
  </html>`;

  return html;
}

// Generate the HTML for a Manager
function generateManagerHTML(manager) {
  return `<div class="card manager">
      <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${manager.getId()}</li>
          <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li>Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>`;
}

// Generate the HTML for an Engineer
function generateEngineerHTML(engineer) {
  return `<div class="card engineer">
      <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${engineer.getId()}</li>
          <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>`;
}

// Generate the HTML for an Intern
function generateInternHTML(intern) {
  return `<div class="card intern">
      <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${intern.getId()}</li>
          <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li>School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>`;
}

// Write the HTML
