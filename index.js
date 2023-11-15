const Shape = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require ('fs')
const Rectangle = require('./lib/shapes')
const Circle = require('./lib/shapes')
const Triangle = require('./lib/shapes')
const window = '<svg xmlns="http://www.w3.org/2000/svg" viewBox ="0 0 300 200">'

// TODO: Create an array of questions for user input
const questions = ['Enter up to three characters for logo text.','Please enter text color keyword or hex value', 'Enter desired logo shape ', 'Enter shape color keyword'];



// TODO: Create a function to initialize app
function init() {
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

      writeToFile('./dir/logo.svg', response)
    });
  
}



function writeToFile(fileName, data) {

  console.log("Shapetype: " + data.shapetype)

 if (data.shapetype =='Rectangle'){
  const rectSVG = `<rect x="100" y="50" width="100px" height="100px" fill="${data.shapecolor}"/>
  <text x="135" y="100" fill="${data.textcolor}">${data.text}</text></svg>` ;
  const rectangle = new Rectangle('<svg xmlns="http://www.w3.org/2000/svg" viewBox ="0 0 300 200">', rectSVG)
  var data = `${rectangle.window}${rectangle.text}`
  console.log("DATA: " +data)    

}else if (data.shapetype=='Circle'){
  const circleSVG = `<circle cx="150" cy="100" r="40" fill="${data.shapecolor}"/>
  <text x="135" y="100" fill="${data.textcolor}">${data.text}</text></svg>` ;
  const circle = new Circle('<svg xmlns="http://www.w3.org/2000/svg" viewBox ="0 0 300 200">', circleSVG)
  var data = `${circle.window}${circle.text}`
  console.log("DATA: " +data)   

 }else if (data.shapetype=='Triangle'){ 
 const triangle = new Triangle(window,data.text,data.textcolor,data.shapecolor)
 var data = triangle.render()
 console.log("DATA LOGGED: " + data) }
   
   fs.writeFile('./dir/logo.svg', data, (err) => {
      if (err) {
        console.error(err);
      }else{
        console.log("Sucess!")
      }
    });
}
   
 



init();                                         // Runs everything on startup

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters

// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`

// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered