const twoSum = (nums, target) => {
	if (nums == null || nums.length == 0) {
		return [];
	}

	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (map.get(diff) != null) {
			return [map.get(diff), i];
		}
		map.set(nums[i], i);
	}
};