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
      this.renderRectangle= function(){
        return `${this.window}<rect x="100" y="50" width="100px" height="100px" fill="${this.shapeColor}"/><text x="135" y="100" fill="${this.textColor}">${this.text}</text></svg>`};
  }};
  

module.exports = Rectangle;