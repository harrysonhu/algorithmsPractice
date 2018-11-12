const pow = (x, n) => {
	if (n >= 0) {
		return helper(x, n);
	} else {
		return 1.0 / helper(x, -n);
	}
};

const helper = (x, n) => {
	if (n == 0) {
		return 1;
	}
	let result = 1;
	let y = helper(x, Math.floor(n / 2));
	if (n % 2 == 0) {
		result = y * y;
	} else {
		result = y * y * x;
	}
	return result;
};

const test1 = pow(2, 4);
console.log(test1);

const test2 = pow(2, -2);
console.log(test2);

const test3 = pow(3, 3);
console.log(test3);