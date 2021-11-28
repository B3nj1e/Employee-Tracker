const inquirer = require('inquirer');


const { conn } = require('../config/connection.js')

const viewDepartment = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var term = `SELECT * FROM department;`;
    connection.query(term, function (err, results) {
        if (err) throw err;
        console.log(results);
        console.table(results);
    });
    })
};

const addDepartment = () => {

}



module.exports = { viewDepartment, addDepartment }