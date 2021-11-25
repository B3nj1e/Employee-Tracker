const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: USER,
      password: PASS,
      database: DB_NAME
    },
    console.log(`Connected to the database.`)
  );