const ftoc = function(temperature) {
	let fahrenheitResult = (temperature - 32) * (5 / 9);
	return Math.round(fahrenheitResult * 10) / 10;
};

const ctof = function(temperature) {
	let celsiusResult = temperature * (9 / 5) + 32;
	return Math.round(celsiusResult * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
