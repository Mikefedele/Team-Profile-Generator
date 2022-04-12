const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should creaate new employee", () => {
    const employee = new Employee("john", "11", "john@john", "role");

    expect(employee.name).toEqual("john");

    expect(employee.id).toEqual("11");
  });
});

