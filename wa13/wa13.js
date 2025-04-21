// Problem 1
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];
console.log("Problem 1:", employees);

// Problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log("Problem 2:", company);

// Problem 3
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
console.log("Problem 3:", company);

// Problem 4
let totalSalary = 0;
for (const employee of company.employees) {
    totalSalary += employee.salary;
}
console.log("Problem 4: Total Salary =", totalSalary);

// Problem 5
function applyRaises(company) {
    for (const employee of company.employees) {
        if (employee.raiseEligible) {
            employee.salary *= 1.10; // Increase by 10%
            employee.raiseEligible = false; // Set raiseEligible to false
        }
    }
}
applyRaises(company);
console.log("Problem 5: After raises", company);

// Problem 6
const workingFromHome = ['Anna', 'Sam'];

for (const employee of company.employees) {
    employee.wfh = workingFromHome.includes(employee.firstName);
}
console.log("Problem 6: After setting WFH status", company);
