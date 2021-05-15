INSERT INTO departments (name) VALUES 
	("Sales"),
	("Engineering"),
	("Finance"),
	("Legal")
;

INSERT INTO roles(title) VALUES
("Sales Lead"),
("Salesperson"),
("Lead Engineer"),
("Software Engineer"),
("Accountant"),
("Legal Team Lead"),
("Lawyer");

INSERT INTO managers(name) VALUES
("Nik"),("Steven"),("Connor"), ("Brandon");

INSERT INTO employees(first_name, last_name, salary, role_id, department_id, manager_id) VALUES
("Frank","Batron",100000, 1,1,1),
("Leo","Davinci",80000, 2,1,1),
("Walton", "Goggins",120000,3,2,2),
("Kevin", "Allen",75000,4,2,2);
