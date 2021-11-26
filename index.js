const mysql = require('mysql2');
const inquirer = require('inquirer');

// need to import departments, roles and employee files
const roles = require('./lib/roles');

const questions = () => inquirer 
  .prompt([
    {
      type: "list",
      name: "initial", 
      message: "Please select the option you would like to perform",
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    }
  ])

  
  if (questions.choices === 'View all departments') {
    // console.table(deparments)
    roles.viewRole();
  };

  if (questions.choices === 'View all roles') {

  };

  if (questions.choices === 'View all employees') {

  }

  if (questions.choices === 'Add a department') {

  }

  if (questions.choices === 'Add a role') {

  }

  if (questions.choices === 'Add an employee') {

}

questions()
