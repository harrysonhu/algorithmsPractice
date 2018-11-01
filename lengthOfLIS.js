const longestIncreasingSubsequence = nums => {
	if (nums == null || nums.length == 0) {
		return 0;
	}
	let max = 1;
	let dp = [];
	dp[0] = 1;
	for (let i = 1; i < nums.length; i++) {
		dp[i] = 1;
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
				dp[i] = dp[j] + 1;
			}
			max = Math.max(max, dp[i]);
		}
	}

	return max;
}

const test1 = longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(test1); // 4

const test2 = longestIncreasingSubsequence([1, 2, 3, 4, 0, 0, 5, 2]);
console.log(test2); // 5

const test3 = longestIncreasingSubsequence([10, 9, 8, 7]);
console.log(test3); // 1

const test4 = longestIncreasingSubsequence([]);
console.log(test4); // 0