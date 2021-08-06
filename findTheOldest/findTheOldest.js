const findTheOldest = function(arr) {
	arr.sort((a, b) => {
		let currentYear = new Date().getFullYear();
		
		if (!a.yearOfDeath) a.yearOfDeath = currentYear;
		if (!b.yearOfDeath) b.yearOfDeath = currentYear;

		let firstPerson = a.yearOfDeath - a.yearOfBirth;
		let secondPerson = b.yearOfDeath - b.yearOfBirth;
		
		if (firstPerson < secondPerson) {
			return 1;
		} else {
			return -1;
		}
	});
	
	return arr[0];
};

module.exports = findTheOldest;
