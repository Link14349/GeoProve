const { SLine, Angle } = require("./GeoObjects");


let l1 = new SLine();
let l2 = new SLine();
let l3 = new SLine();
l2.parallel(l1);
let a1 = new Angle(l1.ndirection, l3.direction);
let a2 = new Angle(l2.direction, l3.direction);
console.log(a1.equal(a2));