const wiggleSort = function(nums) {
	if (nums.length < 2) {
		return nums;
	}
	for (let i = 0; i < nums.length - 1; i++) {
		if ((i % 2 == 0 && nums[i] > nums[i + 1]) || (i % 2 == 1 && nums[i] < nums[i + 1])) {
			swap(nums, i, i + 1);
		}
	}

	return nums;
};

const swap = function(nums, i, j) {
	let temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
};

const test1 = wiggleSort([3, 5, 2, 1, 6, 4]);
console.log(test1);

const test2 = wiggleSort([7, 8, 9, 2, 4, 3]);
console.log(test2);

const test3 = wiggleSort([]);
console.log(test3);