const productExceptSelf = function(nums) {
	let result = [];
	let left = 1;
	for (let i = 0; i < nums.length; i++) {
		if (i > 0) {
			left = left * nums[i - 1];
		}
		result[i] = left;
	}
	let right = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		if (i < nums.length - 1) {
			right = right * nums[i + 1];
		}
		result[i] *= right;
	}
	return result;
};

const test1 = productExceptSelf([1, 2, 3, 4]);
console.log(test1); // [24, 12, 8, 6]

const test2 = productExceptSelf([]);
console.log(test2);
