const minSubArrayLen = (s, nums) => {
	let sum = 0;
	let start = 0;
	let minLen = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		while (sum >= s) {
			let subArrayLen = (i - start) + 1;
			minLen = Math.min(minLen, subArrayLen);
			sum -= nums[start++];
		}
	}

	return minLen == Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

const test1 = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log(test1); // 2

const test2 = minSubArrayLen(10, [1, 2, 3, 3]);
console.log(test2); // 0

const test3 = minSubArrayLen(20, [20, 2, 5, 8, 3]);
console.log(test3); // 1