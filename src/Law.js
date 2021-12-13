class Law {
	constructor(objtypes, checker) {
		this.objtypes = objtypes;
		this.check = checker;// 验证是否符合条件，是则返回结论，否则返回null
	}
}

module.exports.Law = Law;