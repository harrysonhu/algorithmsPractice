const combinationSumIII = function(k, n) {
	const result = [];
	findCombinations(result, k, n, [], 1);
	return result;
};

const findCombinations = function(result, k, n, temp, start) {
	if (temp.length == k && n == 0) {
		result.push(temp.slice());
	}
	for (let i = start; i <= 9; i++) {
		if (temp.indexOf(i) != -1) {
			continue;
		}
		temp.push(i);
		findCombinations(result, k, n - i, temp, i + 1);
		temp.pop();
	}
};

const test1 = combinationSumIII(3, 7);
console.log(test1);

const test2 = combinationSumIII(3, 9);
console.log(test2);

const test3 = combinationSumIII(4, 0);
console.log(test3);