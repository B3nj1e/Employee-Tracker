const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: USER,
      password: PASS,
      database: DB_NAME
    },
    console.log(`Connected to the database.`)
  );

module.exports = db