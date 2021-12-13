class Vector {
	construction() {
		this.parallel = [];
	}
}
class GObject {
	constructor(t) {
		this.type = t;
	}
}
class Point extends GObject {
	constructor() {
		super('p');
	}
}
class SLine extends GObject {
	constructor(point = []) {
		super('s');
		this.point = point;
		this.direction = new Vector();
		this.ndirection = new Vector();
	}
	parallel(s) {
		this.direction.parallel.push(s.direction);
		this.ndirection.parallel.push(s.ndirection);
		s.direction.parallel.push(this.direction);
		s.ndirection.parallel.push(this.ndirection);
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
	constructor(v1, v2, point = null) {
		super('a');
		this.v1 = v1;
		this.v2 = v2;
		this.point = point;
	}
}

module.exports.SLine = SLine;