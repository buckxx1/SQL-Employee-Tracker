USE employee_db;
INSERT INTO employee (id,first_name, last_name, role_id, manager_id)
VALUES 
  (1, "Phil", "Kessel", 1, 2),
  (2, "Linda", "Hamilton", 1, 1),
  (3, "Arnold", "Hey", 2, 1),
  (4, "Auston", "Matthews", 2, 1),
  (5, "Will", "Butcher", 3, 1),
  (6, "Jack", "Campbell", 4, 1);

INSERT INTO role (id, title, salary, department_id) 
VALUES
  (1, "Manager", 50000, 1),
  (2, "Waiter", 5000, 2),
  (3, "Cleaner", 5000, 3),
  (4, "Handyman", 6000, 4);

INSERT INTO department (id, name)
VALUES  
  (1, "Management"),
  (2, "Hospitality"),
  (3, "Sanitation"),
  (4, "Maintenance");