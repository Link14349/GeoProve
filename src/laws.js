const { Law } = require("./Law");
const { Equal, Polynomial, Term, Item } = require("./Expression");

const laws = [];

laws.push(new Law("aa", (angle1, angle2) => {
	if ((angle1.v1 == angle2.nv1 && angle1.v2 == angle2.nv2) || (angle1.v2 == angle2.nv1 && angle1.v1 == angle2.nv2))
		return new Equal(new Polynomial(new Term(new Item(angle1))), new Polynomial(new Term(new Item(angle2))));
	return null;
}));// 对顶角定理
laws.push(new Law("aa", (angle1, angle2) => {
	if ((angle1.v1.isParallel(angle2.v1) && angle1.v2.isParallel(angle2.v2)) || (angle1.v2.isParallel(angle2.v1) && angle1.v1.isParallel(angle2.v2)))
		return new Equal(new Polynomial(new Term(new Item(angle1))), new Polynomial(new Term(new Item(angle2))));
	return null;
}));// 同位角定理
laws.push(new Law("t", (triangle) => {
	if (triangle.check())
		return new Equal(new Polynomial(new Term(new Item(triangle.alpha)), new Term(new Item(triangle.beta)), new Term(new Item(triangle.gamma))), new Polynomial(new Term(new Item(180))));
	return null;
}));// 三角形内角和定理

module.exports.laws = laws;