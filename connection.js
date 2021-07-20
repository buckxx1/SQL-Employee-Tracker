const dotenv = require('dotenv');
dotenv.config();
console.log(process.env)
const { env } = require('process');
const mysql = require('mysql2');


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'employee_db',
});

db.connect((err) => {
  if (err) throw err;
   console.log('\nYou are connected to the employee_db.');
});
// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })
// const db = mysql.createConnection({
//   host: 'localhost',
//   // Your MySQL username,
//   user: 'root',
//   // Your MySQL password
//   password: 'password',
//   database: 'employee_db'
// });

module.exports = db;
