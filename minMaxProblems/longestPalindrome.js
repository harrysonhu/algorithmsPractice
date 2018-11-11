let startPos = 0;
let longestLen = 0;

const longestPalindrome = s => {
	if (s == null || s.length < 2) {
		return s;
	}	
	const chars = s.split('');
	let resultOdd;
	let resultEven;
	for (let i = 0; i < chars.length; i++) {
		findLongest(chars, i, i);
		findLongest(chars, i, i + 1);
	}

	return s.substring(startPos, startPos + longestLen);
};

const findLongest = (chars, start, end) => {
	while (start >= 0 && end < chars.length && chars[start] == chars[end]) {
		start--;
		end++;
	}
	let len = end - start - 1;
	if (len > longestLen) {
		startPos = start + 1;
		longestLen = len;
	}
};

const test1 = longestPalindome('hannah');
console.log(test1);

