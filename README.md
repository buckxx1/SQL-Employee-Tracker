# SQL-Employee-Tracker
Program to track and mange your employees 

## schema 

* department

* id - INT PRIMARY KEY
* name - VARCHAR(30) for department name 

* role 

* id - INT PRIMARY KEY 
* title - VARCHAR(30) for title 
* salary - DECIMAL for the salary
* department_id - INT for the department role

* employee

 * id - INT PRIMARY KEY
 * first_name - VARCHAR(30) for employees first name 
 * last_name - VARCHAR(30) for employees last name 
 * role_id - INT for what the employees role is 
 * manager_id - INT to reference the manager of the current employee. can return null if employee does not have a current manager 



* Use the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* Use [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

* Use [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.
