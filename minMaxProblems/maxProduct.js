const maxProduct = nums => {
	if (nums == null || nums.length == 0) {
		return 0;
	}
	let result = nums[0];
	let max = nums[0];
	let min = nums[0];
	for (let i = 1; i < nums.length; i++) {
		let temp = max;
		max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
		min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);
		result = Math.max(max, result);
	}
	return result;
}

const test1 = maxProduct([2, 3, -2, 4]);
console.log(test1);

const test2 = maxProduct([]);
console.log(test2);

const test3 = maxProduct([-2, -4, -8, 9, -12]);
console.log(test3);