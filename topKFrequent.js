const topKFrequent = (nums, k) => {
	let result = [];
	if (nums == null || nums.length == 0) {
		return result;
	}
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
	}
	let buckets = new Array(nums.length + 1).fill(null).map(() => []);
	for (let entry of map.entries()) {
		buckets[entry[1]].push(entry[0]);
	}
	for (let i = buckets.length - 1; i >= 0; i--) {
		for (let j = 0; j < buckets[i].length; j++) {
			result.push(buckets[i][j]);
			if (result == k) {
				return result;
			}
		}
	}
}

const test1 = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(test1); // [1, 2]

const test2 = topKFrequent([3,4,5,3,3,3], 1);
console.log(test2); // [3]