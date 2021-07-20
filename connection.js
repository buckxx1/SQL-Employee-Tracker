const dotenv = require('dotenv');
const { env } = require('process');
const mysql = require('mysql2');

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
// const db = mysql.createConnection({
//   host: 'localhost',
//   // Your MySQL username,
//   user: 'root',
//   // Your MySQL password
//   password: 'password',
//   database: 'employee_db'
// });

module.exports = db;
