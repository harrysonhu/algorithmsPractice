const combinationSumII = function(nums, target) {
	const result = [];
	nums.sort();
	backtracker(result, nums, target, [], [], 0);
	return result;
};

const backtracker = function(result, nums, target, temp, used, start) {
	if (target < 0) {
		return;
	}
	if (target === 0) {
		result.push(temp.slice());
	}
	for (let i = start; i < nums.length; i++) {
		if (nums[i] == nums[i - 1] && !used[i - 1]) {
			continue;
		}
		temp.push(nums[i]);
		used[i] = true;
		backtracker(result, nums, target - nums[i], temp, used, i + 1);
		temp.pop();
		used[i] = false;
	}
};

const test1 = combinationSumII([10, 1, 2, 7, 6, 1, 5], 8);
console.log(test1);

const test2 = combinationSumII([2, 5, 2, 1, 2], 5);
console.log(test2);

const test3 = combinationSumII([], 20);
console.log(test3);