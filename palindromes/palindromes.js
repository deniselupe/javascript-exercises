const palindromes = function (string) {
	string = string.toLowerCase();
	string = string.replace(/[^a-zA-Z]+/g, '');
	string = string.split('');
	let newString = [];
	
	for (let i = string.length - 1; i >= 0; i--) {
		newString.push(string[i]);
	}
	
	if (string.join('') === newString.join('')) {
		return true;
	} else {
		return false;
	}
};

module.exports = palindromes;
