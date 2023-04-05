const Shape = require('./shape');

class Circle extends Shape {
  constructor(color) {
    super(color);
    this.radius = 50;
  }
  
  setRadius(radius) {
    this.radius = radius;
  }
  
  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}

module.exports = Circle;