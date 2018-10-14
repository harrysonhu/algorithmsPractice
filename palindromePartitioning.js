const partition = function(s) {
	const result = [];
	partitionHelper(result, s, [], 0);
	return result;
};

const partitionHelper = function(result, s, temp, start) {
	if (start == s.length) {
		result.push(temp.slice());
	}
};
