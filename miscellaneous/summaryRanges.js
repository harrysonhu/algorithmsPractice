const summaryRanges = nums => {
	let result = [];
    for (let i = 0; i < nums.length; i++) {
        let initialNum = nums[i];
        while (i < nums.length - 1 && nums[i] + 1 == nums[i + 1]) {
            i++;
        }
        if (nums[i] == initialNum) {
            result.push(nums[i] + "");
        } else {
            result.push(initialNum + "" + "->" + nums[i]);
        }
    }
    
    return result;
};

const test1 = summaryRanges([0, 1, 2, 4, 5, 7]);
console.log(test1);

const test2 = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
console.log(test2);

const test3 = summaryRanges([0, 1, 2, 3, 4, 5]);
console.log(test3);

const test34 = summaryRanges([0, 2, 4, 6, 8, 10]);
console.log(test4);