const Shape = require('./shape');

class Square extends Shape {
  constructor(color) {
    super(color);
    this.size = 100;
  }
  
  setSize(size) {
    this.size = size;
  }
  
  render() {
    return `<rect x="100" y="50" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

module.exports = Square;