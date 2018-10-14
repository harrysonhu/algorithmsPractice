const permute = function(nums) {
	const result = [];
	permuteHelper(nums, result, []);
	return result;
}

const permuteHelper = function(nums, result, temp) {
	if (temp.length == nums.length) {
		result.push(temp.slice());
	} else {
		for (let i = 0; i < nums.length; i++) {
			if (temp.indexOf(nums[i]) > -1) {
				continue;
			}
			temp.push(nums[i]);
			permuteHelper(nums, result, temp);
			temp.pop();
		}
	}
};

const test1 = permute([]); 
console.log(test1); // []

const test2 = permute([1, 2, 3]);
console.log(test2);

const test3 = permute([2, 4, 6, 10]);
console.log(test3);