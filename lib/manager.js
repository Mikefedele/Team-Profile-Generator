var employeeMod = require("../lib/employee")


class Manager extends Employee {
  constructor(name, role, id, email, officeNumb) {
  super(name, role, id, email);
    this.num = response.officeNumb;
  
  }
buildManager() {
  `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${name}/${role}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> ${id} </li>
    <li class="list-group-item"> ${email} </li>
    <li class="list-group-item"> ${num} </li>
  </ul>
  </div>`

}
}


const managerCard = new Manager