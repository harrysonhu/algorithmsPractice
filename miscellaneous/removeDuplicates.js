const removeDuplicates = nums => {
	if (nums == null || nums.length == 0) {
		return 0;
	}
	let curr = nums[0];
	let count = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] == curr) {
			count++;
			if (count > 2) {
				nums.splice(i, 1);
			i	fe (nums[i] == curr) {
					i--;
				} else {
					curr = nums[i];
					count = 1;
				}
			}
		} else {
			curr = nums[i];
			count = 1;
		}
	}

	return nums.length;
};

const test1 = removeDuplicates([1, 1, 1, 2, 2, 3]);
console.log(test1); // 5

const test2 = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
console.log(test2); // 7