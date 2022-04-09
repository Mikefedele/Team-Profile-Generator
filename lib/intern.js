const Employee = require("../lib/employee");

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, role, id, email);
    this.school = school;   
  };
    getschool = () => this.school;
    

  buildIntern = () => {
    `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${this.name}/${this.role}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ${this.id} </li>
      <li class="list-group-item"> ${this.email} </li>
      <li class="list-group-item"> ${this.school} </li>
    </ul>
    </div>`
  };
};

module.exports = Intern;