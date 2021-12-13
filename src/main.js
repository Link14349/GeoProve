const { SLine, Angle } = require("./GeoObjects");
const { laws } = require("./laws");


let l1 = new SLine();
let l2 = new SLine();
let a1 = new Angle(l1.direction, l2.direction, l1.ndirection, l2.ndirection);
let a2 = new Angle(l1.ndirection, l2.ndirection, l1.direction, l2.direction);
console.log(laws[0].check(a1, a2));