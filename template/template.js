function managerCard {
    return `<div class="col">
    <div class= 'card shadow-md bg-white rounded'>
        <div class ="card-body">
            <div class="card-title bg-primary">
                <h1>${manager.getRole()}</h1>
                <h2 class="card-title">${manager.getName()}</h2>
                <p class ="card-text">ID: ${manager.getID()}</p>
                <p class ="card-text">${manager.getEmail()}</p>
                <p class ="card-text">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>`;
}

function engineerCard {
    return `<div class="col">
    <div class= 'card shadow-md bg-white rounded'>
        <div class ="card-body">
            <div class="card-title bg-primary">
                <h1>${engineer.getRole()}</h1>
                <h2 class="card-title">${engineer.getName()}</h2>
                <p class ="card-text">ID: ${engineer.getID()}</p>
                <p class ="card-text">${engineer.getEmail()}</p>
                <p class ="card-text">Github: ${engineer.getGithub()}</p>
            </div>
        </div>
    </div>`;
}

function internCard {
    return `<div class="col">
    <div class= 'card shadow-md bg-white rounded'>
        <div class ="card-body">
            <div class="card-title bg-primary">
                <h1>${intern.getRole()}</h1>
                <h2 class="card-title">${intern.getName()}</h2>
                <p class ="card-text">ID: ${intern.getID()}</p>
                <p class ="card-text">${intern.getEmail()}</p>
                <p class ="card-text">School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div>`;
}
function renderHtml(teamMembers) {
    let employees = ``;
    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
            employees += managerCard(teamMembers[i]);
         }else if (teamMembers[i].getRole() === "Engineer") {
            employees += engineerCard(teamMembers[i]);
            } else {
                employees += internCard(teamMembers[i]);
            }
        }

        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Team Members</title>
        </head>
        <body>
        <header>
        <div class='container-fluid'>
        <div class='row'>
        <div class='jumbotron text-center bg-dark'>
        <h1>Team Members</h1>
        </div>
        </header>
        <main>
        <div class="container-body container-fluid">
        <div class="row">
        ${employees}
        </div>
        </div>
        </main>
        </body>
        </html>`;
    }
        module.exports = renderHtml;
    
