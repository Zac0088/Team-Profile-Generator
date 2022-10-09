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
addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Engineer name?",
            name: "name"
        },
        {
            type: "input",
            message: "engineers ID?",
            name: "id"
        },
        {
            type: "input",
            message: "Engineers email?",
            name: "email"
        },
        {
            type: "input",
            message: "Engineers Githun?",
            name: "github"
        }
    ]).then((response)=> {
        response.roll = "Engineer";
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(engineer);
        addEmployee();
    })
};
addIntern = () => {
    console.log();
    return inquirer.prompt([
        {
            type: "input",
            message: "Interns name?",
            name: "name"
        },
        {
            type: "input",
            messgae: "Intern ID?",
            name: "id"
        },
        {
            type: "input",
            message: "Intern Email?",
            name: "email"
        },
        {
            type: "input",
            message: "Interns Schools name?",
            name: "school"
        }
    ]).then((response)=> {
        response.role = "Intern";
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employees.push(intern);
        addEmployee();
    })
};