const Employee = require("../lib/employee");
//keep constructor seperate from rest of class methods

class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, role, id, email);
    this.school = school;
  }
  getschool () {
    return this.school
  }
  buildIntern () {
    return (
    `<div class="card" style="width: 18rem;">
    <div class="card-header text-center">
     <h3>${this.name}</h3>
     <h5>${this.role}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${this.id}</li>
      <li class="list-group-item"> ${this.email}</li>
      <li class="list-group-item">School: ${this.school}</li>
    </ul>
    </div>`);
  };
}
//export after it's created
module.exports = Intern;
