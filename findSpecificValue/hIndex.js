const hIndex = citations => {
	let n = citations.length;
	let map = {};
	map[n] = 0;
	for (let i = 0; i < citations.length; i++) {
		if (citations[i] > n) {
			map[n] += 1;
		} else if (map[citations[i]] == null) {
			map[citations[i]] = 1;
		} else {
			map[citations[i]]++;
		}
	}

	let count = 0;
	for (let i = n; i >= 0; i--) {
		if (map[i] != null) {
			count += map[i];	
		}
		
		if (count >= i) {
			return i;
		}
	}
}

const test1 = hIndex([3, 0, 6, 1, 5]);
console.log(test1); // 3

const test2 = hIndex([2, 4, 5, 0, 7, 4]);
console.log(test2); // 4