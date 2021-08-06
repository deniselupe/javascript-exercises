const fibonacci = function(number) {
	if (number < 0) return 'OOPS';
	if (number === 0) return 0;
	if (number <= 2) return 1;
	
	let a = 0;
	let b = 1;

	for (let i = 1; i < number; i++) {
		let temp = b;
		b = a + b;
		a = temp;
	}
	
	return b;
};

module.exports = fibonacci;
