const getTheTitles = function(arr) {
	let titles =[];
	for (let i = 0; i < arr.length; i++) {
		titles.push(arr[i].title);
	}
	
	return titles;
};

module.exports = getTheTitles;
