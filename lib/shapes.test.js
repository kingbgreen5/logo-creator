// const Triangle = require('./lib/shapes');
const Triangle= require('./shapes');
const ShapesClass= require('./shapes');
const window = '<svg viewBox ="0 0 300 200">'


describe('Triangle', () => {
    describe('render', () => {
      it(`'<polygon points="150, 18 244, 182 56, 182" fill="blue"/> <text x="135" y="120" fill="blue">TST</text></svg>'`, () => {
        const shape = new Triangle('window','TST','blue','blue');
     
        expect(shape.render()).toEqual('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox ="0 0 300 200"><polygon points="150, 18 244, 182 56, 182" fill="blue"/> <text x="135" y="120" fill="blue">TST</text></svg>');
      });
    });
  });
  



// const shape = new Triangle2();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');