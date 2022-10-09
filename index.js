const inquirer = require('inquirer');
const fs = require('fs');
const renderHtml = require('./template/template')
const { inherits } = require("util");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let employees = [];

init = () => {
    console.log();
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Managers name?",
                name: "name"
            },
            {
                type: "input",
                message: "Manager ID number?",
                name: "id"
            },
            {
                type: "input",
                messge: "Your email adress?",
                name: "email"
            },
            {
                type: "input",
                messagfe: "Office number?",
                name: "officeNumber"
            }
        ]).then((response)=> {
            response.role = "Manager";
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(manager);
            employeeRole();
        })
    };
    employeeRole = () => {
        console.log();
        return inquirer .prompt([
            {
                type: "list",
                message: "Employee role?",
                name: "role",
                choices: [
                    "Engineer",
                    "Intern"
                ]
            }
        ]).then(response => {
            if (response.role==="Engineer") {
                addEngineer();
            }else {
                addIntern();
            }
        })
    };
