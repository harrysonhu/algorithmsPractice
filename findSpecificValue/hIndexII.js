const hIndexII = citations => {
	let n = citations.length;
    let lo = 0;
    let hi = citations.length - 1;
	while (lo <= hi) {
		let mid = Math.floor(lo + (hi - lo) / 2);
		if (n - mid == citations[mid]) {
			return n - mid;
		} else if (n - mid > citations[mid]) {
			lo = mid + 1;
		} else {
			hi = mid - 1;
		}
	}
	return n - lo;
};

const test1 = hIndexII([0, 1, 3, 5, 6]);
console.log(test1);

const test2 = hIndexII([0, 2, 4, 4, 5, 7]);
console.log(test2);

const test3 = hIndexII([0]);
console.log(test3);