CREATE DATABASE traklabs;

CREATE TABLE employee(
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(30),
    dateofbirth DATE,
    phoneno INT(10),
    email VARCHAR(30),
    department VARCHAR(15)
	constraint fk_dept_code foreign key (department) references department(department))
);


