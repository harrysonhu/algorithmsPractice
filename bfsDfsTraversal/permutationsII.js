const permuteII = function(nums) {
	const result = [];
	nums.sort();
	permuteHelper(nums, result, [], []);
	return result;
};

const permuteHelper = function(nums, result, temp, used) {
	if (temp.length === nums.length) {
		result.push(temp.slice());
	} else {
		for (let i = 0; i < nums.length; i++) {
			if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {
				continue;
			}
			used[i] = true;
			temp.push(nums[i]);
			permuteHelper(nums, result, temp, used);
			used[i] = false;
			temp.pop();
		}
	}
};

const test1 = permuteII([]);
console.log(test1); // []

const test2 = permuteII([1, 1, 2]);
console.log(test2); // [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

const test3 = permuteII([4, 4, 4, 4]);
console.log(test3); // [[4, 4, 4, 4]]