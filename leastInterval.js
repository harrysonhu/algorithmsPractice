// Incomplete - This is the Task Scheduler problem on LeetCode

const leastInterval = (tasks, n) => {
	if (n == 0) {
		return tasks.length;
	}
	let map = new Map();
	for (let i = 0; i < tasks.length; i++) {
		map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
	}
	map.entries.sort((a, b) => {
		a[1] - b[1];
	});
	console.log(map);
}

const test1 = leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2);
console.log(test1);