const customSqrt = x => {
	if (x == 0) {
		return 0;
	}
	let lo = 1;
	let hi = x;
	while (lo <= hi) {
		let mid = lo + Math.floor((hi - lo) / 2);
		if (mid > x/mid) {
			hi = mid - 1;
		} else {
			if ((mid + 1) > x/(mid + 1)) {
				return mid;
			}
			lo = mid + 1;
		}
	}
	return lo;
};

const test1 = customSqrt(4);
console.log(test1); // 2

const test2 = customSqrt(8);
console.log(test2); // 2

const test3 = customSqrt(177);
console.log(test3); // 13