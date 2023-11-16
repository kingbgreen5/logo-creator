
const inquirer = require('inquirer');
const fs = require ('fs')
const Rectangle = require('./lib/Rectangle')
const Circle = require('./lib/Circle')
const Triangle = require('./lib/Triangle')
const window = '<svg xmlns="http://www.w3.org/2000/svg" viewBox ="0 0 300 200">'

// TODO: Create an array of questions for user input
const questions = ['Enter up to three characters for logo text.','Please enter text color keyword or hex value', 'Enter desired logo shape ', 'Enter shape color keyword'];




function init() {                                           // Initialize 
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'text',
        validate: function (input){
          if (input.length <= 3){
          return true
          }}
      },
      {
          type: 'input',
          message: questions[1],
          name: 'textcolor',
        },
        {
            type: 'list',
            message: questions[2],
            name: 'shapetype', 
            choices: ['Rectangle', 'Circle','Triangle']
          },
          {
            type: 'input',
            message: questions[3],
            name: 'shapecolor',
          },
          
    ])
    .then((response) =>{ // user answers stored in response

      writeToFile('./dir/logo.svg', response)                         //calls write to file
    });
}



function writeToFile(fileName, data) {                            // write to file function, if shapetype is one of three shapes, runs that code

 if (data.shapetype =='Rectangle'){
  const rectangle = new Rectangle(window,data.text,data.textcolor,data.shapecolor)        
  var data = rectangle.renderRectangle()     

}else if (data.shapetype=='Circle'){
  const circle = new Circle(window,data.text,data.textcolor,data.shapecolor)
  var data = circle.renderCircle()   

 }else if (data.shapetype=='Triangle'){ 
 const triangle = new Triangle(window,data.text,data.textcolor,data.shapecolor)
 var data = triangle.renderTri()
 }
   
   fs.writeFile('./dir/logo.svg', data, (err) => {
      if (err) {
        console.error(err);
      }else{
        console.log("Sucess!")
        console.log("DATA LOGGED: " + data)
      }
    });
}


init();                                         // Runs everything on startup
