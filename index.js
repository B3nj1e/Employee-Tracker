const mysql = require('mysql2');
const inquirer = require('inquirer');

// need to import departments, roles and employee files
const roles = require('./lib/roles');
const departments = require('./lib/departments');
const employees = require('./lib/employees');

const questions = async () => { await inquirer 
  .prompt([
    {
      type: "list",
      name: "initial", 
      message: "Please select the option you would like to perform",
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
    }
  ]).then((data) => {
    console.log(data)
  
  if (data.initial === 'View all departments') {
    console.log("View department");
    departments.viewDepartment();
    questions();

  }

  else if (data.initial === 'View all roles') {
    console.log("View roles");
    roles.viewRole();
    questions();
  }

  else if (data.initial === 'View all employees') {
    console.log("view employees");
    employees.viewEmployees();
    questions();
  }

  else if (data.initial === 'Add a department') {
    const order = async () => {
    console.log("add department");
    await departments.addDepartment();
    await questions();
    }
    order();
  }

  else if (data.initial === 'Add a role') {
    const order = async () => {
      console.log("add role");
      await roles.addRole();
      await questions();
      }
      order();
  }

  else if (data.initial === 'Add an employee') {
    const order = async () => {
      console.log("add employee");
      await employees.addEmployee();
      await questions();
      }
      order();
  } 
  
  else if (data.initial === 'Quit') {
  return
  }
}).catch((error) => {
  console.log(error)
  })};

questions();

module.exports = { questions }
