const { SLine, Angle, Point, Triangle } = require("./GeoObjects");
const { laws } = require("./laws");


let A = new Point, B = new Point, C = new Point;
let ABC = new Triangle(A, B, C);
console.log(ABC);
