const searchRange = function(nums, target) {
	const range = [nums.length - 1, -1];
	helper(nums, target, range, 0, nums.length - 1);
	if (range[0] > range[1]) {
		return [-1, -1];
	}
	return range;
};

const helper = function(nums, target, range, left, right) {
	if (left > right) {
		return;
	}
	let mid = Math.floor(left + (right - left) / 2);
	if (nums[mid] == target) {
		if (mid < range[0]) {
			range[0] = mid;
			helper(nums, target, range, left, mid - 1);
		}
		if (mid > range[1]) {
			range[1] = mid;
			helper(nums, target, range, mid + 1, right);
		}
	} else if (nums[mid] < target) {
		helper(nums, target, range, mid + 1, right);
	} else {
		helper(nums, target, range, left, mid - 1);
	}
};

const test1 = searchRange([], 10);
console.log(test1); // [-1, -1]

const test2 = searchRange([5, 7, 7, 8, 8, 10], 8);
console.log(test2); // [3, 4]

const test3 = searchRange([2, 3, 5, 6, 7, 8], 20);
console.log(test3); // [-1, -1]

const test4 = searchRange([3, 3, 3, 5, 6, 12, 14], 3);
console.log(test4); // [0, 2]