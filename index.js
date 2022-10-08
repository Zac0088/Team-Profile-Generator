const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const employeeArray = [];

function addEmployee() {
    inquirer
        .createPromptModule([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "ID number?",
                name: "id",
            },
            {
                type: "input",
                messge: "Your email adress?",
                name: "email",
            },
            {
                type: "list",
                messagfe: "Your role?",
                name: "role",
                choices: ["Engineer", "Intern", "manager"],
            },
        ])
        .then(as)
}