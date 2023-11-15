// const Triangle = require('./lib/shapes');
const Triangle= require('./shapes');
const Rectangle= require('./shapes');
const Circle = require('./shapes');

// const window = '<svg viewBox ="0 0 300 200">'




describe('Rectangle', () => {
    describe('render', () => {
      it(`'displays <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox ="0 0 300 200"><rect x="100" y="50" width="100px" height="100px" fill="blue"/><text x="135" y="100" fill="blue">TST</text></svg>`, () => {
        const shape = new Rectangle('window','TST','blue','blue');
        expect(shape.renderRectangle()).toEqual('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox ="0 0 300 200"><rect x="100" y="50" width="100px" height="100px" fill="blue"/><text x="135" y="100" fill="blue">TST</text></svg>');
      });
    });
  });
  


  describe('Circle', () => {
    describe('render', () => {
      it('Should Output text to create a circle', () => {
        const shape= new Circle('window','TST','blue','blue');
        expect(shape.renderCircle()).toEqual('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox =\"0 0 300 200\"><circle cx="150" cy="100"  r="40" fill="blue"/> <text x="138" y="100" fill="blue">TST</text></svg>');
      });
    });
  });
  

  describe('Triangle', () => {
    describe('render', () => {
      it(`Outputs Text to create a Triangle`, () => {
        const shape = new Triangle('window','TST','blue','blue');
        expect(shape.renderTri()).toEqual('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox ="0 0 300 200"><polygon points="150, 18 244, 182 56, 182" fill="blue"/> <text x="135" y="120" fill="blue">TST</text></svg>');
      });
    });
  });




























// const shape = new Triangle2();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');