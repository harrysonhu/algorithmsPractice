const majorityElement = function(nums) {
	const candidate = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (count == 0) {
			candidate = nums[i];
		}
		if (nums[i] == candidate) {
			count++;
		} else {
			count--;
		}
	}
	let verify = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == candidate) {
			verify++;
		}
		if (verify > Math.floor(nums.length / 2)) {
			break;
		}
	}

	return candidate;
};

const test1 = majorityElement([3, 2, 3]);
console.log(test1);

const test2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(test2);