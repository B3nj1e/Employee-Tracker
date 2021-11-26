const mysql = require('mysql2');
require('dotenv').config();

function connection() {
    return mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.USER,
      password: process.env.PASS,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the database.`)
  );
};

module.exports = { connection }