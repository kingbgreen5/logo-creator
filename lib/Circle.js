class ShapesClass{
    constructor(window,text,textColor,shapeColor){
    this.window ='<svg xmlns="http://www.w3.org/2000/svg" viewBox ="0 0 300 200">'
    this.text = text 
    this.textColor= textColor 
    this.shapeColor= shapeColor 
}};



class Circle extends ShapesClass{
    constructor(window,text,textColor,shapeColor) {
      super(window,text,textColor,shapeColor,)
      this.renderCircle= function(){
        return `${this.window}<circle cx="150" cy="100"  r="40" fill="${this.shapeColor}"/> <text x="138" y="100" fill="${this.textColor}">${this.text}</text></svg>`}
    };
  };
  
  module.exports = Circle;