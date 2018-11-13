const atoi = str => {
	if (str == null || str.length == 0) {
		return 0;
	}
	str = str.trim();
	let pos = 0;
	let sign = 1;
	let result = 0;
	if (str.charAt(pos) == '+') {
		sign = 1;
		pos++;
	} else if (str.charAt(pos) == '-') {
		sign = -1;
		pos++;
	}
	for (let i = pos; i < str.length; i++) {
		const char = str.charAt(i);
		if (isNaN(Number(char)) || char == ' ') {
			return result * sign;
		}
		result = result * 10 + (char - '0');
		if (sign == 1 && result > Math.pow(2, 31) - 1) {
			return Math.pow(2, 31) - 1;
		} else if (sign == -1 && (-1) * result < -(Math.pow(2, 31))) {
			return -(Math.pow(2, 31));
		}
	}

	return result * sign;
}

const test1 = atoi('434');
console.log(test1);

const test2 = atoi("-91283472332");
console.log(test2);

const test3 = atoi("999999999999");
console.log(test3);

const test4 = atoi("     437   ");
console.log(test4);

const test5 = atoi("469 phone 7");
console.log(test5);