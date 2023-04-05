const Shape = require('./shape');
const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

describe('Shape', () => {
  test('setColor sets color property', () => {
    const shape = new Shape('#000000');
    shape.setColor('#ffffff');
    expect(shape.color).toEqual('#ffffff');
  });

  test('render throws error', () => {
    const shape = new Shape('#000000');
    expect(() => shape.render()).toThrow();
  });
});

describe('Circle', () => {
  test('setRadius sets radius property', () => {
    const circle = new Circle('#000000');
    circle.setRadius(75);
    expect(circle.radius).toEqual(75);
  });

  test('render returns SVG string', () => {
    const circle = new Circle('#000000');
    circle.setRadius(75);
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="75" fill="#000000" />'
    );
  });
});

describe('Triangle', () => {
  test('setPoints sets points property', () => {
    const triangle = new Triangle('#000000');
    triangle.setPoints('100,50 200,50 150,150');
    expect(triangle.points).toEqual('100,50 200,50 150,150');
  });

  test('render returns SVG string', () => {
    const triangle = new Triangle('#000000');
    triangle.setPoints('100,50 200,50 150,150');
    expect(triangle.render()).toEqual(
      '<polygon points="100,50 200,50 150,150" fill="#000000" />'
    );
  });
});

describe('Square', () => {
  test('setSize sets size property', () => {
    const square = new Square('#000000');
    square.setSize(150);
    expect(square.size).toEqual(150);
  });

  test('render returns SVG string', () => {
    const square = new Square('#000000');
    square.setSize(150);
    expect(square.render()).toEqual(
      '<rect x="100" y="50" width="150" height="150" fill="#000000" />'
    );
  });
});