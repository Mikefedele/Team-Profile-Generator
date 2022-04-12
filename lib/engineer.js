const Employee = require("../lib/employee");

class Engineer extends Employee {
  constructor(name, role, id, email, gitName) {
    super(name, role, id, email);
    this.gitName = gitName;
  }
  getGithub() {
    return this.gitName;
  }

  buildEngineer () {
    return (
    `<div class="card" style="width: 18rem;">
      <div class="card-header text-center">
       <h3>${this.name}</h3>
       <h5>${this.role}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id} </li>
        <li class="list-group-item"> ${this.email} </li>
        <li class="list-group-item"><a href="https://github.com/${this.gitName}">Github: ${this.gitName}</a></li>
      </ul>
      </div>`);
  };
}

module.exports = Engineer;

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
