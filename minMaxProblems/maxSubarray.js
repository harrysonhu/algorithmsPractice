const maxSubarray = nums => {
	if (nums == null || nums.length == 0) {
		return 0;
	}
	let max = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] > 0) {
			nums[i] += nums[i - 1];
		}
		max = Math.max(max, nums[i]);
	}
	return max;
};

const test1 = maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(test1); 

const test2 = maxSubarray([3, 4, 5, 6, 7]);
console.log(test2);