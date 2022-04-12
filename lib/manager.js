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
      <div class="card-header text-center" id="mutliLine">
       <h3> ${this.name}</h3>
       <h5> ${this.role}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id} </li>
        <li class="list-group-item"> ${this.email} </li>
        <li class="list-group-item">Office#: ${this.officeNumb} </li>
      </ul>
      </div>`);
  };
}

module.exports = Manager;
