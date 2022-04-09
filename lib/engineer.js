const Employee = require("../lib/employee")
module.exports = Engineer

class Engineer extends Employee {
  constructor(name, role, id, email, gitName) {
  super(name, role, id, email);
    this.gitName = response.gitName;
    this.buildEngineer =() => {
      `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${name}/${role}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> ${id} </li>
        <li class="list-group-item"> ${email} </li>
        <li class="list-group-item"> ${gitName} </li>
      </ul>
      </div>`
    
    }
  }

}




// `<div class="card" style="width: 18rem;">
// <div class="card-header">
//   ${name}/${role}
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item"> ${id} </li>
//   <li class="list-group-item"> ${email} </li>
//   <li class="list-group-item">Vestibulum at eros</li>
// </ul>
// </div>`