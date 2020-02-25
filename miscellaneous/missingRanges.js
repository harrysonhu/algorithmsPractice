const missingRanges = (nums, lower, upper) => {
	if (nums === null || nums.length === 0) {
		return [];
	}
	let start = lower;
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
  	if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
    	continue;
    }
    
  	if (start === nums[i]) {
    	start++;
    } else {
    	result.push(createRange(start, nums[i] - 1));
      start = nums[i] + 1;
    }
  }
  
  if (start <= upper) {
  	result.push(createRange(start, upper));
  }
  
  return result;
}

const createRange = (start, end) => {
	return start === end ? `${start}` : `${start}->${end}`;
}

console.log(missingRanges([0, 1, 3, 50, 75], 0, 99));
console.log(missingRanges([4, 50], 0, 99));