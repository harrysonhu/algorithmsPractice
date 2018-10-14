const coinChange = function(coins, amount) {
	const max = Number.MAX_SAFE_INTEGER;
	if (coins == null || amount < 0) {
		return -1;
	}
	const dp = new Array(amount + 1).fill(max);
	dp[0] = 0;
	for (let coin of coins) {
		for (let i = coin; i <= amount; i++) {
			dp[i] = Math.min(dp[i], dp[i - coin] + 1);
		}
	}

	return dp[amount] == max ? -1 : dp[amount];

}

const test1 = coinChange([1, 2, 5], 11);
console.log(test1); // Expect 3

const test2 = coinChange([], 3);
console.log(test2); // Expect -1

const test3 = coinChange([4, 5, 6], 2);
console.log(test3); // Expect -1

const test4 = coinChange([2, 3, 10], 10);
console.log(test4); // Expect 1