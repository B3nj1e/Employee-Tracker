
const inquirer = require('inquirer');

const { conn } = require('../config/connection.js')

const viewEmployees = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var term = `SELECT employees.id AS employee_id, employees.first_name, employees.last_name, role.title AS job_title, role.salary, department.name AS department_name 
    FROM role
    JOIN employees ON role.id = employees.role_id
    JOIN department ON department.id = role.department_id;`;
    connection.query(term, function (err, results) {
        if (err) throw err;
        console.table(results);
    });
    })
};

const addEmployee = async () => { 
    await inquirer 
        .prompt([
            {
                type: 'input', 
                message: "What is your employee's first name?",
                name: 'firstName',
            },
            {
                type: 'input', 
                message: "What is your employee's last name?",
                name: 'lastName',
            },
            {
                type: 'input', 
                message: 'What is the role of your employee(role id)?',
                name: 'role',
            },
            {
                type: 'input', 
                message: "Who is your employee's manager(id)?",
                name: 'manager',
            }
        ]).then((data) => {
            const connection = conn();
            connection.connect(function(err) {if (err) throw err;
            var term = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
            VALUES ("${data.firstName}", "${data.lastName}", ${data.role}, ${data.manager});`;
            connection.query(term, function (err, results) {
            if (err) throw err;
            viewEmployees();
            })});
                
        })

}

module.exports = { viewEmployees, addEmployee }


// const viewEmployees = () => {
//     const term = `SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary
// FROM role
// JOIN employees ON role.id = employees.role_id
// JOIN department ON department.id = role.department_id;`
// }

// addEmployee

