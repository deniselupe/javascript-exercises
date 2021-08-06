const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let result = 0;
	if (arr.length < 1) return 0;
	
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	
	return result;
};

const multiply = function(arr) {
	let result = 1;
	if (arr.length < 2) return 'ERROR: Must have at least 2 numbers to multiply.';
	
	for (let i = 0; i < arr.length; i++) {
		result *= arr[i];
	}
	
	return result;
};

const power = function(number, exponent) {
	let result = 1;
	
	for (let i = 1; i <= exponent; i++) {
		result *= number;
	}

	return result;
};

const factorial = function(number) {
	let result = 1;
	
	for (let i = number; i > 1; i--) {
		result *= i;
	}
	
	return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
