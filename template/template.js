function manager {
    return `<div class="col"`>
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
    </div>
}
function engineer {
    return `<div class="col"`>
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
    </div>
}
