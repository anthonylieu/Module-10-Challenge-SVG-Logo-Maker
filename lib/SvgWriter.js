const fs = require('fs');
const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

class SvgWriter {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  write() {
    let shape;

    switch (this.shape) {
      case 'circle':
        shape = new Circle(this.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(this.shapeColor);
        break;
      case 'square':
        shape = new Square(this.shapeColor);
        break;
      default:
        throw new Error('Invalid shape');
    }

    shape.render();

    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      ${shape.render()}
      <text x="150" y="100" text-anchor="middle" font-size="48" fill="${this.textColor}">${this.text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
  }
}

module.exports = SvgWriter;