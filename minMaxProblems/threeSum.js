const threeSum = nums => {
	const result = [];
	if (nums == null || nums.length == 0) {
		return result;
	}
	nums.sort((a, b) => {
		return a - b;
	});
	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		let lo = i + 1;
		let hi = nums.length - 1;
		let target = -nums[i];
		while (lo < hi) {
			if (nums[lo] + nums[hi] == target) {
				result.push([nums[i], nums[lo], nums[hi]]);
				while (nums[lo] == nums[lo + 1]) {
				lo++;
			}
			while (nums[hi] == nums[hi - 1]) {
				hi--;
			}
			lo++;
			hi--;
			} else if (nums[lo] + nums[hi] > target) {
				hi--;
			} else {
				lo++;
			}
		}
	}
	return result;
}

const test1 = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(test1);

const test2 = threeSum([4, 6, 3, 0, -2, -2, -3]);
console.log(test2);