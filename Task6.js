const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

const extendEmployeeInfo = { ...employee, age: 30, salary: 1000000 };
console.log(extendEmployeeInfo);
