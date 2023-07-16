export class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

export class Triangle extends Shape {
  render() {
    return `<polygon points="150, 50 50, 150 250, 150" style="fill:${this.getColor()}"/>`;
  }
}

export class Circle extends Shape {
  render() {
    return `<circle cx="158" cy="100" r="75" style="fill:${this.getColor()}"/>`;
  }
}

export class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" style="fill:${this.getColor()}"/>`;
  }
}
