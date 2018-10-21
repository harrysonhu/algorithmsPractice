const subsets = function(nums) {
	const result = [];
	subsetHelper(nums, result, [], 0);
	return result;
};

const subsetHelper = function(nums, result, temp, start) {
	result.push(temp.slice());
	for (let i = start; i < nums.length; i++) {
		temp.push(nums[i]);
		subsetHelper(nums, result, temp, i + 1);
		temp.pop();
	}
};

const test1 = subsets([]);
console.log(test1); // [];

const test2 = subsets([1, 2, 3]);
console.log(test2);