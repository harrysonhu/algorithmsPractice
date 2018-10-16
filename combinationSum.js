const combinationSum = function(nums, target) {
	const result = [];
	backtracker(result, nums, [], target, 0);
	return result;
};

const backtracker = function(result, nums, temp, target, start) {
	if (target < 0) {
		return;
	}
	if (target === 0) {
		result.push(temp.slice());
	}
	for (let i = start; i < nums.length; i++) {
		temp.push(nums[i]);
		backtracker(result, nums, temp, target - nums[i], i);
		temp.pop();
	}
};

const test1 = combinationSum([2, 3, 6, 7], 7);
console.log(test1);

const test2 = combinationSum([], 10);
console.log(test2); // []

const test3 = combinationSum([2, 3, 5], 8);
console.log(test3);