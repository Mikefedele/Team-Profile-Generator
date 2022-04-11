const Intern = require("../lib/intern")

describe("getSchool", () => {
  const intern = new Intern('jim', '11', 'jim@jim.com', 'intern', 'mySchool');
  it('should return the intern school', () => {
    expect(intern.getschool()).toEqual ('mySchool')
  }) 
} )