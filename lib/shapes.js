class ShapesClass{
constructor(window,text,shape){
this.window ='<svg viewBox ="0 0 300 200">'
this.text = text
}};

class Rectangle extends ShapesClass{					// makes blogpost an extension of forumindex
    constructor(window,text,rect) {
      super(window,text,);
        this.text=`<rect x="100" y="50" width="100px" height="100px"
        fill=""/>
        <text x="135" y="100" fill="white">BTK</text>
        </svg>`
}};

class Circle extends ShapesClass{					// makes blogpost an extension of forumindex
    constructor(window,text,circ) {
      super(window,text);
        this.circ= circ
}};

class Triangle extends ShapesClass{					// makes blogpost an extension of forumindex
    constructor(window,text,poly) {
      super(window,text);
        this.poly= poly
}};

module.exports = ShapesClass;
module.exports = Rectangle;
module.exports = Circle;
module.exports = Triangle;