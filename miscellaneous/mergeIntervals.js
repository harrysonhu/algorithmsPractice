const mergeIntervals = intervals => {
	if (intervals == null || intervals.length == 0) {
		return intervals;
	}
	const start = [];
	const end = [];
	for (let i = 0; i < intervals.length; i++) {
		start.push(intervals[i][0]);
		end.push(intervals[i][1]);
	}
	start.sort((a, b) => {
		return a - b;
	});
	end.sort((a, b) => {
		return a - b;
	});
	const result = [];
	let j = 0;
	for (let i = 0; i < intervals.length; i++) {
		if (i == intervals.length - 1 || start[i + 1] > end[i]) {
			result.push([start[j], end[i]]);
			j = i + 1;
		}
	}
	return result;
};

const test1 = mergeIntervals([[1,4], [0, 2], [3, 5]]);
console.log(test1);

const test2 = mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
console.log(test2);