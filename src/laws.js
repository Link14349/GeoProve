const { Law } = require("./Law");
const { Equal } = require("./Expression");

const laws = [];

laws.push(new Law("aa", (angle1, angle2) => {
	if ((angle1.v1 == angle2.nv1 && angle1.v2 == angle2.nv2) || (angle1.v2 == angle2.nv1 && angle1.v1 == angle2.nv2))
		return new Equal(angle1, angle2);
	return null;
}));// 对顶角定理

module.exports.laws = laws;