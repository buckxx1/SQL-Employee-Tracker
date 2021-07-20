# SQL-Employee-Tracker
Program to track and mange your employees 

### link to video 

https://drive.google.com/file/d/15Qme4HMNW6v3mpgvUYu3IUOqnO_H6rTL/view?usp=sharing
https://drive.google.com/file/d/1yil4c75TyG5qP2tfS8yC7E9rqss0T86F/view?usp=sharing


### github repo (https://github.com/buckxx1/SQL-Employee-Tracker)
link to the github file 


### user story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

### acceptance criteria 

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role

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

