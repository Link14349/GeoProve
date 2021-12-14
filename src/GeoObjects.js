class Vector {
	constructor() {
		this.pl = [];
		this.neg = null;
	}
	parallel(v) {
		if (this == v) return;
		for (let i of this.pl) 
			if (i == v) return;
		this.pl.push(v);
		for (let i = 0; i < this.pl.length - 1; i++) this.pl[i].parallel(v);
		v.parallel(this);
	}
	isParallel(v) {
		if (this == v) return true;
		for (let i of this.pl) if (i == v) return true;
		return false;
	}
}
// class GGraph {
// 	constructor(objects = []) {
// 		this.objects = objects;
// 	}
// }
class GObject {
	constructor(t) {
		this.type = t;
	}
}
class Point extends GObject {
	constructor(line = []) {
		super('p');
		this.line = line;
	}
	addLine(l) {
		for (let line of this.line)
			if (line == l) return;
		this.line.push(l);
	}
}
class SLine extends GObject {
	constructor(point = []) {
		super('s');
		this.point = point;
		for (let p of point) p.addLine(this);
		this.direction = new Vector();
		this.ndirection = new Vector();
		this.direction.neg = this.ndirection;
		this.ndirection.neg = this.direction;
	}
	parallel(s) {
		this.direction.parallel(s.direction);
		this.ndirection.parallel(s.ndirection);
	}
}
class LineSegment extends GObject {
	constructor(p1, p2) {
		super("l");
		this.p1 = p1;
		this.p2 = p2;
		this.line = findLineTrough(p1, p2);
		this.length = null;
	}
}
class Radial extends GObject {
	constructor(point = []) {
		super('r');
		this.point = point;
		this.direction = new Vector();
	}
}
class Angle extends GObject {
	constructor(v1, v2, point = null, value = null) {
		super('a');
		this.v1 = v1;
		this.v2 = v2;
		this.nv1 = v1.neg;
		this.nv2 = v2.neg;
		this.point = point;
		this.value = value;
	}
	// equal(a) {
	// 	if ((this.v1.isParallel(a.v1) && this.v2.isParallel(a.v2)) || (this.v2.isParallel(a.v1) && this.v2.isParallel(a.v1))) return true;
	// 	return false;
	// }
}
class Triangle extends GObject {
	constructor(A = new Point, B = new Point, C = new Point) {
		super("t");
		this.A = A;
		this.B = B;
		this.C = C;
		this.AB = new LineSegment(A, B);
		this.AC = new LineSegment(A, C);
		this.BC = new LineSegment(B, C);
		this.alpha = new Angle(this.AB.line.direction, this.AC.line.direction);
		this.beta = new Angle(this.AB.line.direction, this.BC.line.direction);
		this.gamma = new Angle(this.AC.line.direction, this.BC.line.direction);
	}
	check() {
		if (typeof this.alpha.value == "Number" && typeof this.beta.value == "Number" && typeof this.gaama.value == "Number") {
			return this.alpha.value + this.beta.value + this.gamma.value == 180;
		}
		return true;
	}
}

function findLineTrough(p1, p2) {
	// 寻找穿过p1, p2的直线，若没有则新建一个
	for (let line of p1.line)
		for (let p of line.point)
			if (p == p2) return line;
	return new SLine([ p1, p2 ]);
}

module.exports.Vector = Vector;
module.exports.GObject = GObject;
module.exports.Point = Point;
module.exports.LineSegment = LineSegment;
module.exports.SLine = SLine;
module.exports.Radial = Radial;
module.exports.Angle = Angle;
module.exports.Triangle = Triangle;