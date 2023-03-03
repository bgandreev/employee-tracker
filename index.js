const inquirer = require('inquirer');


function viewAllEmployees() {
    console.log('=== All Employees ===')
}

function viewAllRoles() {
    console.log('=== All Roles ===')
}

function viewAllDepartments() {
    console.log('=== All Departments ===')
}


console.log('\n============ EMPLOYEE DATABASE ============');
console.log('\n');


function prompts() {
    inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "VIEW_ALL_EMPLOYEES"
          },
          {
            name: "Add Employee",
            value: "ADD_EMPLOYEE"
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE"
          },
          {
            name: "View All Roles",
            value: "VIEW_ALL_ROLES"
          },
          {
            name: "Add Role",
            value: "ADD_ROLE"
          },
          {
            name: "View All Departments",
            value: "VIEW_ALL_DEPARTMENTS"
          },  {
            name: "Add Department",
            value: "ADD_DEPARTMENT"
          },
        ]
      }
    ]).then(res => {
      let choice = res.choice;
      switch (choice) {
        case "VIEW_ALL_EMPLOYEES":
            viewAllEmployees();
            break;
        case "ADD_EMPLOYEE":
          addEmployee();
          break;
        case "UPDATE_EMPLOYEE_ROLE":
          updateEmployeeRole();
          break;
        case "VIEW_ALL_ROLES":
          viewAllRoles();
            break;
        case "ADD_ROLE":
          addRole();
            break;        
        case "VIEW_All_DEPARTMENTS":
          viewAllDepartments();
          break;
        case "ADD_DEPARTMENT":
          addDepartment();
          break;
      }
    }
    )
}

prompts();




