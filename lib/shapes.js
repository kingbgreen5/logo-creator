class ShapesClass{
constructor(window,text,textColor,shapeColor){
this.window ='<svg xmlns="http://www.w3.org/2000/svg" viewBox ="0 0 300 200">'
this.text = text 
this.textColor= textColor 
this.shapeColor= shapeColor 
}};



class Rectangle extends ShapesClass{					
  constructor(window,text,textColor,shapeColor) {
    super(window,text,textColor,shapeColor);
  }
  render(){
    return `${this.window}rect x="100" y="50" width="100px" height="100px"
    fill="${this.shapeColor}"/><text x="135" y="100" fill="${this.textColor}">${this.text}</text></svg>`;
  }
};

class Circle extends ShapesClass{					
  constructor(window,text,textColor,shapeColor) {
    super(window,text,textColor,shapeColor);
  }
  render(){
    return `${this.window}<circle cx="150" cy="100"  r="40" fill="${this.shapeColor}"/> <text x="138" y="100" fill="${this.textColor}">${this.text}</text></svg>`;
  }
};


class Triangle extends ShapesClass{					
  constructor(window,text,textColor,shapeColor) {
    super(window,text,textColor,shapeColor);
  }
      render(){
        return `${this.window}<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/> <text x="135" y="120" fill="${this.textColor}">${this.text}</text></svg>`;
      }
    };
    module.exports = ShapesClass;
    module.exports = Rectangle;
    module.exports = Circle;
    module.exports = Triangle;
   
    
    