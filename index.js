const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


//todo create template html template 
//todo start questions list 



//*open app prompt for manager name 1st?????
// quest for employees **.then if** a manger questions & engineer .. found when function inquirer

//Start with manager prompts?

//*create cards for each in their classes??



const teamMembers = [];
var engineers = [];
var interns = [];

function questions(){ 
  let promptInq = inquirer.createPromptModule()


  return promptInq([
    {
      type: 'list', 
      name: 'role',
      message: 'Role on the team?',
      choices: ["Manager", "Engineer", "Intern"],
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
    },    
    {
      type: 'confirm',
      message: "Would you like to add another employee?",
      name: 'again',
      
    } 
  

  ]).then(function(response) {
    //*MAYBE CALL IN A FUNCTION TO DO ALL OF THE LOGIC CREATING VAR NAMING 
    if (response.role === "Engineer") {
     const engineers = New Engineer ((resp))
    };
    console.log(engineers);

    if (response.role === "Intern") {
      interns = interns({response})
    };
    console.log(interns);

    if (response.again === true) {
      questions();
    } else {
      console.log(response);
    }
  })
}.the

questions();
  
  // .then(response => {teamMembers.push(response)});

  
  // .then(response => console.log(response));

// if (condition) {
  
// } else {
  
// }
//   else if (condition) {
    
//   } else {
    
//   }


  // .then(response => console.log(response));



  // .then(response => )


//todo polymorph or constructor with an if statement? function for creating cards???
//todo promise for asking to create new employees??

//*constructor
// function Developer(name, tech) {
//   this.name = name;
//   this.tech = tech;
//   this.introduction = () => 
//     console.log(`"Hi, my name is ${name} and I love ${tech}"`);
  
// }

// const me = new Developer('Mike', 'Javascript');
// me.introduction();



//*polymorph
  // const OverloadDemo = function () {
  //   this.area = function (x, y) {
  //     console.log('x = ', x);
  //     if (!y) {
  //       console.log('y is not provided');
  //       return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
  //     }
  //     console.log('y = ', y);
  //     return `\nThe area of the rectangle is ${x * y} sq units`;
  //   };
  // };




// .then((response) => { 
    



  //*THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated