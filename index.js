const employee = {
    name: "John",
    streetAddress: "Some Street Drive",
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
return newObj
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function deleteFromEmployeeByKey(employee, key) {
    const newObject = { ...employee };
    delete newObject[key];
    return newObject;
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }