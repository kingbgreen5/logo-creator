class ShapesClass{
    constructor(window,text,textColor,shapeColor){
    this.window ='<svg xmlns="http://www.w3.org/2000/svg" viewBox ="0 0 300 200">'
    this.text = text 
    this.textColor= textColor 
    this.shapeColor= shapeColor 
}};



class Triangle extends ShapesClass{
    constructor(window,text,textColor,shapeColor) {
      super(window,text,textColor,shapeColor);
      this.renderTri= function(){
        return `${this.window}<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/> <text x="135" y="120" fill="${this.textColor}">${this.text}</text></svg>`}
  }};


  module.exports = Triangle;