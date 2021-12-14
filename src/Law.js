class Law {
	constructor(objtypes, checker) {
		this.objtypes = objtypes;
		this.checker = checker;// 验证是否符合条件，是则返回结论，否则返回null
	}
	check() {
		if (arguments.length != this.objtypes.length) return null;
		for (let i = 0; i < arguments.length; i++) 
			if (i >= this.objtypes.length) return null;
		return this.checker(...arguments);
	}
}

module.exports.Law = Law;