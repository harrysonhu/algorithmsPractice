const partition = function(s) {
	const result = [];
	partitionHelper(result, s, [], 0);
	return result;
};

const partitionHelper = function(result, s, temp, start) {
	if (start == s.length) {
		result.push(temp.slice());
	} else {
		for (let i = start; i < s.length; i++) {
			if (isPalindrome(s, start, i)) {
				temp.push(s.substring(start, i + 1));
				partitionHelper(result, s, temp, i + 1);
				temp.pop();
			}
		}
	}
};

const isPalindrome = function(s, start, end) {
	while (start < end) {
		if (s.charAt(start) != s.charAt(end)) {
			return false;
		}
		start++;
		end--;
	}
	return true;
};

const test1 = partition(''); // []
console.log(test1);

const test2 = partition('aab');
console.log(test2); // [[a, a, b], [aa, b]]

const test3 = partition('racecar');
console.log(test3);
