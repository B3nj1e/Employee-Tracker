
const inquirer = require('inquirer');

const { conn } = require('../config/connection.js')

const viewRole = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var term = `SELECT role.id, role.title, role.salary, department.name AS department_name FROM department LEFT JOIN role ON department.id = role.department_id ORDER BY role.id`;
    connection.query(term, function (err, results) {
        if (err) throw err;
        console.table(results);
    });
    })
    // const table = await connection.execute(`SELECT role.id, role.title, role.salary, department.name AS department_name 
    // FROM department
    // LEFT JOIN role ON department.id = role.department_id;`);
    // console.table(table);
    // questions();
};

const addRole = async () => { 
    await inquirer 
        .prompt([
            {
                type: 'input', 
                message: 'What is the name of the role you want to add?',
                name: 'name',
            },
            {
                type: 'input', 
                message: 'What is the salary of the role you want to add?',
                name: 'salary',
            },
            {
                type: 'input', 
                message: 'What is the department does your new role below to?',
                name: 'department',
            }
        ]).then((data) => {
            const connection = conn();
            connection.connect(function(err) {if (err) throw err;
            var term = `INSERT INTO role (title, salary, department_id)
            VALUES ("${data.name}", ${data.salary}, ${data.department});`;
            connection.query(term, function (err, results) {
            if (err) throw err;
            viewRole();
            })});
                
        })

}


module.exports = { viewRole, addRole }