const Employee = require("../lib/employee");


class Manager extends Employee {
  constructor(name, role, id, email, officeNumb) {
  super(name, role, id, email);
    this.officeNumb = response.officeNumb;
    this.buildManager = () => {
      `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${name}/${role}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> ${id} </li>
        <li class="list-group-item"> ${email} </li>
        <li class="list-group-item"> ${officeNumb} </li>
      </ul>
      </div>`
    
    }
  }};

module.exports = Manager
