//todo function for inserting cards 
//create new empty array, map over each of my arrays & push the mapped onto 
//
function insertCards(managerArray, engineerArray, internArray) {
 const html = [] 
 //new array.push(createdArray.map(what I'm mapping over it to do.
html.push(managerArray.map(manager => manager.buildManager()));
html.push(engineerArray.map(engineer => engineer.buildEngineer()).join(''));
html.push(internArray.map(intern => intern.buildIntern()).join(''));
return html.join('');
  
}
module.exports = function(arr1, arr2, arr3) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />  
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"> 
      <link rel="stylesheet" href="./dist/style.css"/>

      <title>Team Profile</title>
    </head>
  
    <body>
      <div class="jumbotron jumbotron-fluid text-center" style="background-color: pink;" id="header">
        <h1 class="display-4" id="teamProfile">Team Profile</h1>        
      </div>

      <div class = "container d-flex">
        <div class = "row row-cols-3">
      ${insertCards(arr1, arr2, arr3)}
        </div>
     </div>
    </body>
  
  </html>`
}
