const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(name, role, id, email, officeNumb) {
    super(name, role, id, email);
    this.officeNumb = officeNumb;
  }
  getofficeNumb() {
    return this.officeNumb;
  }

  buildManager () {
    return (
    `<div class="card" style="width: 18rem;">
      <div class="card-header" id="mutliLine">
        ${this.name}<"br>
        ${this.role}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> ${this.id} </li>
        <li class="list-group-item"> ${this.email} </li>
        <li class="list-group-item"> ${this.officeNumb} </li>
      </ul>
      </div>`);
  };
}

module.exports = Manager;
