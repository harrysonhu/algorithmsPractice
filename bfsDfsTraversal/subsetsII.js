const subsetsWithDuplicates = nums => {
	const result = [];
	nums.sort();
	generateSubsets(result, nums, [], 0);
	return result;
};

const generateSubsets = (result, nums, temp, start) => {
	result.push(temp.slice());
	for (let i = start; i < nums.length; i++) {
		if (i > start && nums[i] == nums[i - 1]) {
			continue;
		}
		temp.push(nums[i]);
		generateSubsets(result, nums, temp, i + 1);
		temp.pop();
	}
}

const test1 = subsetsWithDuplicates([1, 2, 2]);
console.log(test1);

const test2 = subsetsWithDuplicates([2, 2, 3, 3]);
console.log(test2);