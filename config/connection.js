//add requirements


const mysql = require('mysql2');

const db = mysql.createConnection({
        host: "localhost",
        
        user: "root",
        password: "password",
        database: "employees_db"
    });


// check to see if connection works 
connection.connect(function(err) {
    if (err) {
        console.error("could not connect to the database: " + err.stack);
        return
    }
    console.log("connection to the database was successful")
});

// stop forgetting your connections 
//dont forget to exporttttttt

module.exports = connection;