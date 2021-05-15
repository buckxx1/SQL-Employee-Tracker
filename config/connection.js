//add requirements

const database = require('mime-db');
const mysql = require('mysql');

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "employees_db"
    });
}

// check to see if connection works 
connection.connect(function(err) {
    if (err) {
        console.error("could not connect to the database: " + err.stack);
        return
    }
    console.log("connection to the database was successful")
})