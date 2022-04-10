const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should be a sublclass of Employee", () =>{
    const engine = new Engineer("github/mike");
    

    expect(emgine.name).toEqual("github/mike");
  })
});         