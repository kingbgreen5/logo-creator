class ShapesClass{
constructor(window,text,shape){
this.window ='<svg viewBox ="0 0 300 200">'
this.text = text
}};

class Rectangle extends ShapesClass{					// makes blogpost an extension of forumindex
    constructor(window,text) {
      super(window,text,);
        this.text = text
}};

class Circle extends ShapesClass{					// makes blogpost an extension of forumindex
    constructor(window,text) {
      super(window);
        this.text = text
}};

class Triangle extends ShapesClass{					// makes blogpost an extension of forumindex
    constructor(window,text,poly) {
      super(window);
        this.text = text
    }};

module.exports = ShapesClass;
module.exports = Rectangle;
module.exports = Circle;
module.exports = Triangle;