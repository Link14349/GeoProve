class Item {
	constructor(value, power = 1) {
		this.value = value;
		this.power = power;
	}
}

class Term {
	constructor(items) {
		this.items = items;
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
module.exports.Relation = Relation;
module.exports.Equal = Equal;