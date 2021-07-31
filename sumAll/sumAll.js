const sumAll = function(num1, num2) {
	if (num1 < 0 || num2 < 0) return 'ERROR';
	if (typeof(num1) !== "number" || typeof(num2) !== "number") return 'ERROR';
	let biggerNum;
	let smallerNum;
	let sum = 0;

	if (num1 > num2) {
		biggerNum = num1;
		smallerNum = num2;
	} else {
		biggerNum = num2;
		smallerNum = num1;
	}

	for (let i = smallerNum; i <= biggerNum; i++) {
		sum += i;
	}

	return sum;
};

module.exports = sumAll;
