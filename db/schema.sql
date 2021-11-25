DROP DATABASE IF EXISTS company_employees_db;
CREATE DATABASE company_employees_db;

USE company_employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE employee_role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL,
    department_id INT, 
);

SELECT employee_role.department_id
FROM employee_role
JOIN department ON employee_role.department_id = department.id;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id INT, 
);