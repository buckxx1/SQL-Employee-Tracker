const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const app = express();
const db = require('./connection');
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3200;




var questions = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "Please select an option?",
      name: "userchoice",
      choices: [
        "View all employees",

        "View all employees By Department",

        "View all employees By Manager",

        "Add employee",

        "Remove employee",

        "Update employee role",

        "Update employee manager",

        "All done for today.",
      ],
    },
  ]).then(function (selection) {

    switch (selection.userchoice) {
      case "View all employees":
        viewAllEmployees();
        break
      case "View all employees By Department":
        viewByDept();
        break
      case "View all employees By Manager":
        viewByManager();
        break
      case "Add employee":
        addEmployee();
        break
      case "Remove employee":
        deleteEmployee();
        break
      case "Update employee role":
        updateRole();
        break
      case "Update employee manager":
        updateManager();
        break
      case "All done for today.":
        complete();
        break
    }
  })
};

//view all employees

function viewAllEmployees() {
  console.log("You have entered the view all employees function")
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) throw err;
    console.table(results);
    questions();
  });
}

//view by departmenet

function viewByDept() {
  console.log("You are viewing employees sorted by department");
  db.query('SELECT * FROM employee JOIN role ON employee.role_id = role.id;', function (err, results) {
    if (err) throw err;
    console.table(results);
    questions();
  })
};

//access view as a manager

function viewByManager() {
  console.log("You are viewing employees sorted by Manager");
  db.query("SELECT employee.first_name AS First, employee.last_name AS Last, role.title AS Role, department.name AS Department, CONCAT(emp.first_name, ' ' ,emp.last_name) AS ReportsTo FROM employee RIGHT JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee emp on employee.manager_id = emp.id;", function (err, results) {
    if (err) throw err;
    console.table(results);
    questions();
  })
}

//add employee function 


function addEmployee() {
  console.log("you have entered the add employee function!");
  inquirer.prompt([
    {
      name: "firstname",
      type: "input",
      message: "Please enter the new employee first name (Required)"
    },
    {
      name: "lastname",
      type: "input",
      message: "Please enter the new employee first name (Required)"
    },
    {
      name: "role",
      type: "list",
      message: "Please enter employee role by selecting from the following:",
      choices: [
        "Manager",
        "Waiter",
        "Cleaner",
        "Handyman"
      ]
    },
    {
      name: "newEmpManager",
      type: "list",
      message: "What is the managers name?",
      choices: [
        "Phil Kessel",
        "Linda Hamilton"
      ]

    }
  ]).then(function (newEmp) {
    var roleId = newEmp.role;
    var managerId = newEmp.newEmpManager;
    if (managerId == "Linda Hamilton") {
      var managerId=2;
    }
    if (managerId == "Phil Kessel") {
      var managerId=1;
    }
    if (roleId == "Manager") {
      var roleId=1;
    }
    if (roleId == "Waiter") {
      var roleId=2;
    }
    if (roleId == "Cleaner") {
      var roleId=3;
    }
    if (roleId == "Handyman") {
      var roleId=4;
    }
    db.query("INSERT INTO employee SET ?", 
    {
        first_name: newEmp.firstname,
        last_name: newEmp.lastname,
        manager_id: managerId,
        role_id: roleId
    }, 
    function(err){
        if (err) throw err
    })
    console.table("Added")
    questions();
})
}
function deleteEmployee() {
  console.log("you have entered the delete employee function!");
  questions();
}

function updateRole() {
  console.log("you have entered the update role function!");
  questions();
}

function updateManager() {
  console.log("you have entered the update manager function!");
  questions();
}

function complete() {
  console.log("Have a good day. Goodbye!");
  process.exit();
}





questions();


// sequelize.sync({ force: false }).then(() => {
//   app.listen(process.env.DB_PORT, () => console.log('Now listening'));
// });
app.listen(PORT, () => console.log("Server listening on port " + PORT));
