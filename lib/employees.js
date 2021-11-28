
const inquirer = require('inquirer');

const { conn } = require('../config/connection.js')

const viewEmployees = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var term = `SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary
    FROM role
    JOIN employees ON role.id = employees.role_id`;
    connection.query(term, function (err, results) {
        if (err) throw err;
        console.log(results);
        console.table(results);
    });
    })
};

const addEmployee = () => {

}



module.exports = { viewEmployees, addEmployee }


// const viewEmployees = () => {
//     const term = `SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary
// FROM role
// JOIN employees ON role.id = employees.role_id
// JOIN department ON department.id = role.department_id;`
// }

// addEmployee

