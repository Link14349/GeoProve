class Vector {
	constructor() {
		this.pl = [];
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
	}
	parallel(s) {
		this.direction.parallel(s.direction);
		this.ndirection.parallel(s.ndirection);
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
	constructor(v1, v2, nv1, nv2, point = null, name = null) {
		super('a');
		this.v1 = v1;
		this.v2 = v2;
		this.nv1 = nv1;
		this.nv2 = nv2;
		this.point = point;
		// this.name = name;
	}
	// equal(a) {
	// 	if ((this.v1.isParallel(a.v1) && this.v2.isParallel(a.v2)) || (this.v2.isParallel(a.v1) && this.v2.isParallel(a.v1))) return true;
	// 	return false;
	// }
}
class Triangle extends GObject {
	constructor(p1 = new Point, p2 = new Point, p3 = new Point) {

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
module.exports.SLine = SLine;
module.exports.Radial = Radial;
module.exports.Angle = Angle;
module.exports.Triangle = Triangle;