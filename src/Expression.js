class Item {
	constructor(value, power = 1) {
		this.value = value;
		this.power = power;
	}
	toString() {
		return this.value.toString() + "^" + this.power.toString();
	}
}

class Term {
	constructor() {
		this.items = arguments;
	}
	simplificate() {
		let n = 1;
		for (let i in this.items) {
			if (typeof this.items[i] == "Number") {
				n *= Math.power(this.items[i]);
				this.items.splice(i, 1);
			}
		}
		this.items.splice(0, 0, n);
	}
	toString() {
		let s = "";
		for (let i of items) s += i.toString();
		return s;
	}
}

class Polynomial {
	constructor() {
		this.terms = arguments;
	}
	toString() {
		let s = "";
		for (let i = 0; i < this.terms.length - 1; i++) s += this.terms[i].toString();
		s += this.terms[this.terms.length - 1].toString();
		return s;
	}
}

class Relation {
	constructor(type, left, right) {
		this.type = type;
		this.left = left;
		this.right = right;
	}
}
class Equal extends Relation {
	constructor(left, right) {
		super('e', left, right);
	}
}

module.exports.Item = Item;
module.exports.Term = Term;
module.exports.Polynomial = Polynomial;
module.exports.Relation = Relation;
module.exports.Equal = Equal;