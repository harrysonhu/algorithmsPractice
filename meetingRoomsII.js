const meetingRoomsII = intervals => {
	if (intervals == null || intervals.length == 0) {
		return 0;
	}
	intervals.sort((a, b) => {
		return a[0] - b[0];
	});
	let rooms = 1;
	let endTimes = [];
	let top = 0;
	endTimes.push(intervals[0][1]);
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] < endTimes[top]) {
			endTimes.push(intervals[i][1]);
			top++;
			rooms++;
		} else {
			endTimes.pop();
			endTimes.push(intervals[i][1]);
		}
	}
	return rooms;
};

const test0 = meetingRoomsII([]);
console.log(test0); // 0

const test1 = meetingRoomsII([[0, 30], [5, 10], [15, 20]]);
console.log(test1); // 2

const test2 = meetingRoomsII([[0, 10], [10, 15], [15, 20]]);
console.log(test2); // 1

const test3 = meetingRoomsII([[0, 5], [20, 35], [10, 25], [30, 35]]);
console.log(test3); // 3