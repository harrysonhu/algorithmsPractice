const maxSubarrayEqualsK = (nums, k) => {
	if (nums === null || nums.length === 0) {
  	return 0;
  }
  
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
  	sum += nums[i];
    if (map.has(sum - k)) {
    	maxLen = Math.max(maxLen, i - map.get(sum - k));
    } 
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  
  return maxLen;
}

console.log(maxSubarrayEqualsK([1, -1, 5, -2, 3], 3)); // 4
console.log(maxSubarrayEqualsK([-2, -1, 2, 1], 1)); // 2
console.log(maxSubarrayEqualsK([2, 4, 1, 1, 1, 1, 1, 2, 3], 5)); // 5