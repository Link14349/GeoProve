const { SLine, Angle } = require("./GeoObjects");
const { laws } = require("./laws");


let l1 = new SLine();
let l2 = new SLine();
let l3 = new SLine();
l1.parallel(l2);
let a1 = new Angle(l1.direction, l3.direction, l1.ndirection, l3.ndirection);
let a2 = new Angle(l2.direction, l3.direction, l2.ndirection, l3.ndirection);
console.log(laws[1].check(a1, a2));