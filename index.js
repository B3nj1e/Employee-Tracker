const mysql = require('mysql2');
const inquirer = require('inquirer');

const questions = inquirer 
  .prompt([
    {
      type: "list",
      name: "initial", 
      message: "Please select the option you would like to perform",
      choices: "['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']"
    }
  ])