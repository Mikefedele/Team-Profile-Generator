const inquirer = require('inquirer');
const fs = require('fs');



//todo create template html template 
//todo start questions list 
//* are we using JS to create the cards?


//*open app prompt for manager name 1st?????
// quest for employees **.then if** a manger questions & engineer 

//Start with manager prompts?

//*create cards for each in their classes??



inquirer
  .prompt([
    {
      type: 'list', 
      name: 'role',
      message: 'Role on the team?',
      choices: ["Manager", "Engineer" ,"Employee", "Intern"],
    },
    {
      type: 'input',
      message: 'Name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Company ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: "Enter office number",
      name: 'officeNumb',
      when: (response) => {
        if (response.role === "Manager")
        return true;
      }
    }, 
    {
      type: 'input',
      message: "What is your Github username?",
      name: 'gitName',
      when: (response) => {
        if (response.role === "Engineer")
        return true;
      }
    },
    {
      type: 'input',
      message: "Where do you go to school?",
      name: 'school',
      when: (response) => {
        if (response.role === "Intern")
        return true;
      }
    } 



  ]).then(response => console.log(response));

// .then((response) => { 
    
//     switch (response.role) {
//   case role[0]:
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//         message: "Enter office number",
//         name: 'officeNumb',
//       } 
//     ])
//     break;

//   case role[1]:  
//   inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: "What is your Github username?",
//       name: 'gitName',
//     } 
//   ])
//   break;

//   case role[2]:
//     inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: "Where do you go to school?",
//       name: 'school',
//     } 
//   ])
//     break;

// }} 
// ).then(response => console.log(response));
  

  // .then(response => writeToFile("", response));

// const roleSwitch = response.role

// switch (response.role) {
//   case Manager:
//     inquirer
//     .prompt([
//       {
//         type: 'input',
//         message: "Enter office number",
//         name: 'officeNumb',
//       } 
//     ])
//     break;

//   case Engineer:  
//   inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: "What is your Github username?",
//       name: 'gitName',
//     } 
//   ])
//   break;

//   case Intern:
//     inquirer
//   .prompt([
    // {
    //   type: 'input',
    //   message: "Where do you go to school?",
    //   name: 'school',
    // } 
//   ])
//     break;

// }


//   if (response.role == Manager) {
//     inquirer
//       .prompt([
//         {
//           type: 'input',
//           message: "Enter office number",
//           name: 'officeNumb',
//         } 

//     ])
//   } else if () {

//   }

// if (condition) {
  
// } else  {
  
// }


  //*THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated