const Manager = require("../lib/manager");

describe("Manager", () => {
  const manager = new Manager(
    "Kate",
    "12345",
    "kate@team.com",
    "manager",
    "867-5309"
  );
  it("should return this officeNumb", () => {
    expect(manager.getofficeNumb()).toEqual("867-5309");
  });
});
