const searchRotated = function(nums, target) {
	if (nums === null || nums.length === 0) {
		return -1;
	}
	let lo = 0;
	let hi = nums.length - 1;
	while (lo <= hi) {
		let mid = lo + Math.floor((hi - lo) / 2);
		if (nums[mid] == target) {
			return mid;
		}
		if (nums[lo] <= nums[mid]) {
			if (nums[lo] <= target && target < nums[mid]) {
				hi = mid - 1;
			} else {
				lo = mid + 1;
			}
		}
		if (nums[mid] <= nums[hi]) {
			if (nums[mid] < target && target <= nums[hi]) {
				lo = mid + 1;
			} else {
				hi = mid - 1;
			}
		}
	}

	return -1;
}

const test1 = searchRotated([], 2);
console.log(test1); // -1

const test2 = searchRotated([4, 5, 6, 7, 0, 1, 2], 2);
console.log(test2); // 6

const test3 = searchRotated([3, 4, 5, 8, 12, 15], 7);
console.log(test3); // -1