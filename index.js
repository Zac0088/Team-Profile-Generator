const inquirer = require('inquirer');
const fs = require('fs');
const renderHtml = require('./template/template')
const { inherits } = require("util");

const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
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
        ]).then(
