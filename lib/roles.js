const mysql = require('mysql2');
const inquirer = require('inquirer');

const { connection } = require('../config/connection')

const viewRole = () => {
    const connection = connection();
    const table = connection.execute(`SELECT role.id, role.title, role.salary, department.name AS department_name 
    FROM department
    LEFT JOIN role ON department.id = role.department_id;`);
    console.table(table);
};

const addRole = () => {

}



module.exports = { viewRole, addRole }