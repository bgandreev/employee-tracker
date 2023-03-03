use employees;


INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Accounting');
    ('HR'),
    ('Warehouse'),


INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Person', 70000, 1),
    ('Sales Manager', 95000, 1),
    ('HR Generalist', 75000, 3),
    ('Warehouse Worker', 50000, 4),
    ('Warehouse Manager', 80000, 4),
    ('Accountant', 100000, 2),
    ('General Admin', 60000, 2);

