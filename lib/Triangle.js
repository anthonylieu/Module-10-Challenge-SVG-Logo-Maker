const Shape = require('./shape');

class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.points = '150,50 100,150 200,150';
  }
  
  setPoints(points) {
    this.points = points;
  }
  
  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

module.exports = Triangle;