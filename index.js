const mysql = require('mysql2');
const inquirer = require('inquirer');

// need to import departments, roles and employee files
const roles = require('./lib/roles');

const questions = async () => { await inquirer 
  .prompt([
    {
      type: "list",
      name: "initial", 
      message: "Please select the option you would like to perform",
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    }
  ]).then((data) => {
    console.log(data)
  
  if (data.initial === 'View all departments') {
    // console.table(deparments)
    
  }

  else if (data.initial === 'View all roles') {
    console.log("hello");
    roles.viewRole();
  }

  else if (data.initial === 'View all employees') {

  }

  else if (data.initial === 'Add a department') {

  }

  else if (data.initial === 'Add a role') {

  }

  else if (data.initial === 'Add an employee') {

}}).catch((error) => {
  console.log(error)
  })};

questions()
