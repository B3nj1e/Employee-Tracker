
const inquirer = require('inquirer');

const { conn } = require('../config/connection.js')

const viewRole = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var term = `SELECT role.id, role.title, role.salary, department.name AS department_name FROM department LEFT JOIN role ON department.id = role.department_id;`;
    connection.query(term, function (err, results) {
        if (err) throw err;
        console.log(results);
        console.table(results);
    });
    })
    // const table = await connection.execute(`SELECT role.id, role.title, role.salary, department.name AS department_name 
    // FROM department
    // LEFT JOIN role ON department.id = role.department_id;`);
    // console.table(table);
    // questions();
};

const addRole = () => {

}



module.exports = { viewRole, addRole }