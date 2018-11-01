const majorityElementII = function(nums) {
	const result = [];
	let candidate1 = 0;
	let candidate2 = 0;
	let count1 = 0;
	let count2 = 0;
	for (let i = 0; i < nums.length; i++) {
		if (candidate1 == nums[i]) {
			count1++
		} else if (candidate2 == nums[i]) {
			count2++;
		} else if (count1 == 0) {
			candidate1 = nums[i];
			count1 = 1;
		} else if (count2 == 0) {
			candidate2 = nums[i];
			count2 = 1;
		} else {
			count1--;
			count2--;
		}
	}

	let verifyCand1 = 0;
	let verifyCand2 = 0;
	let oneThird = Math.floor(nums.length / 3);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == candidate1) {
			verifyCand1++;
		} else if (nums[i] == candidate2) {
			verifyCand2++;
		}
	}
	if (verifyCand1 > oneThird) {
		result.push(candidate1);
	}
	if (verifyCand2 > oneThird) {
		result.push(candidate2);
	}

	return result;
};


const test1 = majorityElementII([3,2,3]);
console.log(test1);

const test2 = majorityElementII([1, 1, 1, 2, 2, 3, 3, 3]);
console.log(test2);

const test3 = majorityElementII([]);
console.log(test3);

