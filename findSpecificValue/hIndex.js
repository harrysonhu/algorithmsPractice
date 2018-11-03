const hIndex = citations => {
	let map = new Map();
	const n = citations.length;
	for (let i = 0; i < citations.length; i++) {
		if (citations[i] > n) {
			map.set(n, (map.get(n) || 0) + 1);
		} else {
			map.set(citations[i], (map.get(citations[i]) || 0) + 1);	
		}
		
	}
	let count = 0;
	for (let i = n; i >= 0; i--) {
		if (map.get(i) != null) {
    		count += map.get(i);
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