const Engineer = require("../lib/engineer");

describe("getgitName", () => {
  const engineer = new Engineer(
    "rufus",
    "420",
    "ru@fus.com",
    "engineer",
    "rufusgit"
  );
  it("should return the engineer gitName", () => {
    expect(engineer.getGithub()).toEqual("rufusgit");
  });
});
