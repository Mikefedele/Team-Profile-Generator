const Employee = require("../lib/employee");

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, role, id, email);
    this.school = response.school;
    this.buildIntern = () => {
      `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${name}/${role}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> ${id} </li>
        <li class="list-group-item"> ${email} </li>
        <li class="list-group-item"> ${school} </li>
      </ul>
      </div>`;
    };
  }
};

module.exports = Intern;