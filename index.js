const Shape = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require ('fs')
const Rectangle = require ('./lib/shapes')



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
      console.log("responses: " + response);
      // writeToFile('README.md', response)

    });
  
}

// Function call to initialize app
// {/* <rect x="100" y="50" width="100px" height="100px"
// fill=""/>
// <text x="135" y="100" fill="white">BTK</text>
// </svg> 




const rectSVG = `<rect x="100" y="50" width="100px" height="100px" fill=""/>` ;
const rectText = `<text x="135" y="100" fill="white">BTK</text>
</svg>`;
        




function writeToFile(fileName, data) {
 if (data.shapetype =='Rectangle'){
  const rectangle = new Rectangle('<svg viewBox ="0 0 300 200">',rectSVG,rectText)
  console.log(rectangle)
  var data = `${rectangle.window}${rectangle.text}`    
}

 if (data.shapetype=='Circle'){}

 if (data.shapetype=='Triangle'){}


    // var data = `data${rectangle}`
    console.log(data)

   fs.writeFile('./dir/logo.svg', data, (err) => {
      if (err) {
        console.error(err);
      }else{
        console.log("sucess!")
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