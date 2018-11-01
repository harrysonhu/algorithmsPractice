const guess = num => {
	let lo = 0;
	let hi = num;
	while (lo <= hi) {
		let mid = lo + Math.floor((hi - lo) / 2);
		if (mid == num) {
			return mid;
		} else if (guess(mid) == -1) {
			// num is lower
			hi = mid - 1;
		} else {
			// num is higher
			lo = mid + 1;
		}
	}
}