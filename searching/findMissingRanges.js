const missingRanges = (nums, lower, upper) => {
	if (nums === null || nums.length === 0) {
  	return [];
  }
  
  const result = [];
  let start = lower;
  for (let i = 0; i < nums.length; i++) {
  	if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
    	continue;
    }
    
    if (nums[i] === start) {
    	start++;
    } else {
    	result.push(getRange(start, nums[i] - 1));
      start = nums[i] + 1;
    }
  }
  
  if (start <= upper) {
  	result.push(getRange(start, upper));
  }
  return result;
}

const getRange = (start, end) => {
	return start === end ? `${start}` : `${start}->${end}`;
}

console.log(missingRanges([0, 1, 3, 50, 75], 0, 99));
console.log(missingRanges([4, 50], 0, 99));