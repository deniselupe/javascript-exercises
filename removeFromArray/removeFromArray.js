const removeFromArray = function(arrObj, ...args) {
	for (let i = 0; i < args.length; i++) {
		for (let j = 0; j < arrObj.length; j++) {
			if (arrObj[j] === args[i]) {
				arrObj.splice(j, 1);
			}
		}
	}
	return arrObj;
};

module.exports = removeFromArray;
