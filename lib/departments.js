const inquirer = require('inquirer');

const { conn } = require('../config/connection.js')

const viewDepartment = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var term = `SELECT * FROM department ORDER BY department.id;`;
    connection.query(term, function (err, results) {
        if (err) throw err;
        console.table(results);
    });
    })
};

const addDepartment = async () => { 
    await inquirer 
        .prompt([
            {
                type: 'input', 
                message: 'What is the name of your new department?',
                name: 'department',
            }
        ]).then((data) => {
            const connection = conn();
            connection.connect(function(err) {if (err) throw err;
            var term = `INSERT INTO department (name) VALUES ("${data.department}");`;
            connection.query(term, function (err, results) {
            if (err) throw err;
            viewDepartment();
            })});
                
        })

}



module.exports = { viewDepartment, addDepartment }