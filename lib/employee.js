const indexReq = require ("../index")

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
getName() {
  return this.name;
}
getID() {
  return this.id;
}
getEmail() {
  return this.email;
}
getRole () {
  return this.role;
}


}

// getemployee () {
//   getname () = response.name,
//   getid () 





module.exports = Employee

// `<div class="card" style="width: 18rem;">
// <div class="card-header">
//   ${name}/${role}
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item"> ${id} </li>
//   <li class="list-group-item"> ${email} </li>
//   <li class="list-group-item"></li>
// </ul>
// </div>`