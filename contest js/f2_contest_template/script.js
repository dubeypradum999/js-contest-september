/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  employees.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  //Write your code here, just console.log
  employees = employees.filter((employee) => employee.profession !== "admin");
  console.log(employees);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
    {id: 5, name: "lisa", age: "22", profession: "developer"},
    {id: 6, name: "peter", age: "25", profession: "designer"},
    {id: 7, name: "nancy", age: "21", profession: "manager"}
  ];
  let concatenatedArray = employees.concat(newEmployees);
  console.log(concatenatedArray);
}
