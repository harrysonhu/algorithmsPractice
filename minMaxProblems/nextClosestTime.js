const wrapper = time => {
	let minDifference = 1441; // one minute over 24 hours
	let result = "";
	const nextClosestTime = time => {
		let nums = time.split('');
		let digits = [];
		const originalMins = parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3));

		for (let i = 0; i < nums.length; i++) {
			if (nums[i] != ':') {
				digits.push(nums[i]);
			}
		}
		dfs(digits, "", originalMins);
	};

	const dfs = (digits, temp, originalMins) => {
		if (temp.length == 4) {
			let hourString = temp.substring(0, 2);
			let minString = temp.substring(2, 4);
			let hours = parseInt(hourString);
			let mins = parseInt(minString);
			if (hours > 23 || mins > 59) {
				return;
			}
			let totalMins = (hours * 60) + mins;
			if (totalMins <= originalMins) {
				// Plus one more day's worth of time, because it counts as tomorrow
				totalMins += 24 * 60;
			}
			if ((totalMins - originalMins) < minDifference) {
				minDifference = totalMins - originalMins;
				result = hourString + ":" + minString;
			}
			return;
		}

		for (let i = 0; i < digits.length; i++) {
			temp += digits[i];
			dfs(digits, temp, originalMins);
			temp = temp.substring(0, temp.length - 1);
		}
	}  
	nextClosestTime(time);
	return result;
};


const test1 = wrapper("19:34");
console.log(test1); // 19:39

const test2 = wrapper("23:59");
console.log(test2); // 22:22

const test3 = wrapper("11:12");
console.log(test3); // 11:21

const test4 = wrapper("01:59");
console.log(test4); // 05:00

const test5 = wrapper("13:27");
console.log(test5); // 13:31