const viewEmployees = () => {
    const term = `SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary
FROM role
JOIN employees ON role.id = employees.role_id
JOIN department ON department.id = role.department_id;`
}

addEmployee

