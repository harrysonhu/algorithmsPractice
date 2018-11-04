const subarrayProductLessThanK = (nums, k) => {
	if (nums == null || nums.length == 0) {
		return 0;
	}
	let count = 0;
	let product = 1;
	let start = 0;
	for (let i = 0; i < nums.length; i++) {
		product *= nums[i];
		while (product >= k && start <= i) {
			product = product / nums[start];
			start++;
		}
		count = count + (i - start) + 1;
	}

	return count;
};


const test1 = subarrayProductLessThanK([10, 5, 2, 6], 100);
console.log(test1);

const test2 = subarrayProductLessThanK([2, 4, 6, 8, 10], 30);
console.log(test2);