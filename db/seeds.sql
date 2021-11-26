USE company_db;

INSERT INTO department (name)
VALUES ("IT"), 
        ("Legal"),
        ("Accounting");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "software engineer", 100000, 1),
        (2, "web developer", 100000, 1),
        (3, "lawyer", 120000, 2), 
        (4, "accountant", 80000, 3);


SELECT role.id, role.title, role.salary, department.name AS department_name 
FROM department
RIGHT JOIN role ON department.id = role.department_id;


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Ben", "Clewer", 2, 2),(2, "John", "Smith", 3, 1);

SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary
FROM role
JOIN employees ON role.id = employees.role_id
JOIN department ON department.id = role.department_id;

-- employees.manager_id = employees.id;