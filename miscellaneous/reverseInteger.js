const reverseInteger = num => {
	let numInStringForm = num.toString();
	let reversed = numInStringForm.split('').reverse().join('');
	if (num < 0) {
		reversed = reversed.substring(0, reversed.length - 1);
	}
	let answer = parseInt(reversed, 10);
	if (answer > Math.pow(2, 31) - 1) {
		return 0;
	}
	if (num < 0) {
		answer *= -1;
	}
	return answer;
};