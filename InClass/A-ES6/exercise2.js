class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() { return this.width * this.height; }
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class Triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 3;
  }
  get area() { return this.width * this.height / 2 }
  sayName() {
    console.log('Hi I am a triangle and my name is ' + this.name + '.');
  }
}

let t = new Triangle(30, 30);
t.sayName();
console.log('The area of this polygon is ' + t.area);

class Circle extends Polygon {
  constructor(height) {
    super(height);
    this.name = "Circle";
    this.sides = 1;
  }
  get area() { return Math.PI * this.height * this.height / 4 }
  sayName() {
    console.log('Hi I am a circle and my name is ' + this.name + '.');
  }
}

let c = new Circle(50);
c.sayName();
console.log('The area of this polygon is ' + c.area);
