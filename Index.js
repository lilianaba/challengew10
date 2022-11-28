const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const path = require("path");
// const OUTPUT_DIR = path.resolve(_dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "index.html");

const emailValidator = require('email-validator');
const { get } = require('http');
emailValidator.validate("test@email.com");

const teamMembers = [];


const managerBuild = () =>{
  return inquirer.prompt([
  {
          type: 'input',
          name: 'name',
          message: "What is the team manager's name?",
          validate: mname => {
            if (mname) {
              return true;
            }else{
              console.log('Please enter a valid name');
              return false;
            }
      },
      
    },
      {    type: 'input',
          name: 'id',
          message:"What is the team manager's ID?" ,
          validate: id => {
            if (!isNaN(id) === true ) {
              return true;
       
            }else {
              console.log('Please enter a valid employee ID');
              // console.log(isNaN(id));
              return false;

            }
          }
      },
       
      {
        type: 'input',
        name: 'email',
        message:"What is the team manager's email?" ,
        validate: email =>{
          if (emailValidator.validate((email))) {
            return true;
          }else{
            console.log('Please enter a valid email');
            return false;
          }
        },
        },
    

      {
        type: 'input',
        name: 'officeNum',
        message:"What is the team manager's office number?" ,
        validate: officeNum =>{
          if ((!isNaN(officeNum) === true) && (officeNum.length >=2 )) {
            return true;
          }else {
            console.log('Please enter a valid office number');
            // console.log(officeNum.length() )
            return false;
          }
        }
      },

      ])
      .then((response)=>{
        // console.log(response);
        const manager = new Manager(response.name, response.id,response.email, response.officeNum);
        const managerCard = (
        `<card class="card col-sm-12 col-md-3 col-lg-3 flex justify-content-center">
        <div class="cardHeader text-center">
            <!-- Name and role -->
            <h2 class="cardName">${manager.name}</h2>
            <h5 class="cardRole text-white bg-success">${manager.getRole()}</h5>
        </div>
        <div class="cardBody text-center">
            <ul class="list-group">
            <!-- Id, Email, OfficeNumber/GitHub/School-->
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" title="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
            </ul>
        </div>
    </card>`)





        teamMembers.push(managerCard);

        // validate info collect and store
        // console.log(teamMembers)



        

        teamMembersBuild();
      })
    };




const teamMembersBuild = () =>{
   inquirer.prompt([
     {
        type: 'list',
        name: 'next',
        message:"What do you want to do next? Add a new team member or did you finish creating your team?" ,
        choices:['Intern','Engineer', 'Finished']
      },      
    ])
    .then(nextStep => {
      switch (nextStep.next) {
        case "Intern":
          buildIntern();
          // teamCreation();
          break;

        case "Engineer":
          buildEngineer();
          // teamCreation();
          break;
        
        default:
          teamCreation();
          break;
       };
    })
};


const buildIntern = () => {
  return inquirer.prompt([
        { type: 'input',
          name: 'name',
          message: "What is the team intern's name?",
          validate: mname => {
            if (mname) {
              return true;
            }else{
              console.log('Please enter a name');
              return false;
            }
          }
       },
            
        {
          type: 'input',
          name: 'id',
          message:"What is the team intern's ID?" ,
          validate: id => {
           // (isNaN(parseInt(
            if (!isNaN(id) === true ) {
              return true;
            }else {
              console.log('Please enter a valid employee ID');
              return false;
            }
          }
       },
             
        {
          type: 'input',
          name: 'email',
          message:"What is the team intern's email?" ,
          validate: email =>{
            if (emailValidator.validate((email))) {
              return true;
            }else{
              console.log('Please enter a valid email');
              return false;
            }
          },
  
        },
      
        {
          type: 'input',
          name: 'school',
          message:"What is the team intern's school?" ,
        },
      
      ])
        .then((int)=>{
          //   console.log(response);
        const intern = new Intern(int.name, int.id,int.email, int.school);
        const internCard = (`<card class="card col-sm-12 col-md-3 col-lg-3 flex justify-content-center">
        <div class="cardHeader text-center">
            <!-- Name and role -->
            <h2 class="cardName">${intern.name}</h2>
            <h5 class="cardRole text-white bg-warning">${intern.getRole()}</h5>
        </div>
        <div class="cardBody text-center">
            <ul class="list-group">
            <!-- Id, Email, OfficeNumber/GitHub/School-->
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" title="mailto:${intern.getEmail()}"> ${intern.getEmail()} </a> </li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </card>`)
        teamMembers.push(internCard);

       // validate info collect and store
        // console.log(teamMembers)


        teamMembersBuild();

           
          });

}; 
    

const buildEngineer = () => {
  return inquirer.prompt([
        { type: 'input',
          name: 'name',
          message: "What is the team engineer's name?",
          validate: mname => {
            if (mname) {
              return true;
            }else{
              console.log('Please enter a valid name');
              return false;
            }
          }
       },
            
        {
          type: 'input',
          name: 'id',
          message:"What is engineer's ID ?" ,
          validate: id => {
            if (!isNaN(id) === true ) {
              return true;
            }else {
              console.log('Please enter a valid employee ID');
              return false;
            }
          }
       },
             
        {
          type: 'input',
          name: 'email',
          message:"What is the team engineer email?" ,
          validate: email =>{
            if (emailValidator.validate((email))) {
              return true;
            }else{
              console.log('Please enter a valid email');
              return false;
            }
          },
  
        },
    
        {
            type: 'input',
            name: 'gitHub',
            message:"What is the team engineer's GitHub username?" ,
          },
    
          ])
          .then((eng)=>{
          //   console.log(response);
          const engineer = new Engineer(eng.name, eng.id,eng.email, eng.gitHub);
          const engineerCard = (
            `<card class="card col-sm-12 col-md-3 col-lg-3 flex justify-content-center">
          <div class="cardHeader text-center">
              <!-- Name and role -->
              <h2 class="cardName">${engineer.name}</h2>
              <h5 class="cardRole text-white bg-dark">${engineer.getRole()}</h5>
          </div>
          <div class="cardBody text-center">
              <ul class="list-group">
              <!-- Id, Email, OfficeNumber/GitHub/School-->
                  <li class="list-group-item">ID: ${engineer.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" title="mailto:${engineer.getEmail()}">${engineer.getEmail()} </a> </li>
                  <li class="list-group-item">GitHub: <a href="https:\\github.com/${engineer.getGitHub()}" title="https:\\github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
              </ul>
          </div>
      </card>`)
         
          teamMembers.push(engineerCard);
        // validate info collect and store
        // console.log(teamMembers)


          teamMembersBuild();

         
          });
    
    };
    
  


    const teamCreation = () => {
      console.log("Your team is being created");
      // validate info collect and store
      // console.log("team creation details: " , teamMembers);
      const finalTeamMembers = teamMembers.join('');
      // validate info collect and store
      // console.log("NEW MEMBERS STRIGN" , finalTeamMembers)
      // return finalTeamMembers;
    

  
      const finalHTML = () => {
      //validate info collect and store
      //console.log("this is the team:",finalTeamMembers) ;
        return( 
          `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" 
              integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
              <link href="https://fonts.googleapis.com/css2?family=Alkalami&family=Dancing+Script:wght@500&family=Noto+Sans+Mono:wght@100&family=Sono&family=Syne:wght@800&display=swap" rel="stylesheet">
              <link rel="stylesheet" href="../dist/style.css">
              <title> MY TEAM </title>
          </head>
          <body>
              <!-- Container for page content -->
              <div class="container-fluid">
                  <!-- Title bar -->
                  <div class="row">
                      <div class="col-12 jumbotron mb-3 team-heading">
                          <h1 class="text-center">MY TEAM </h1>
                      </div>
                  </div>
              <!-- Page content - Employee's Cards-->
              <div class="container">
                  <div class="row justify-content-center">
                      ${finalTeamMembers}  
                      </div>
                  </div>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
              integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
          </body>
          </html>`
        )
     


   }

      
      const filename = `${'index.html'}`;
      fs.writeFile(filename,finalHTML(), (err) =>
      err ? console.log(err) : console.log('suscces!'))

  }

    managerBuild();

