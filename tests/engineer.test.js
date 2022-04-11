const Engineer = require("../lib/engineer");

describe("getgitName", () => {
  const engineer = new Engineer('rufus', '420', 'ru@fus.com', 'engineer', 'rufusGit');
  it('should return the engineer gitName', () => {
    expect(engineer.getgitName()).toEqual ('rufusgit')
  }) 
} )  