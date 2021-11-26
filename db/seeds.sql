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

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Ben", "Clewer", 2, 2),
        (2, "John", "Smith", 3, null);