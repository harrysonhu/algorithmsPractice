const longestSubstringNoRepeat = s => {
	let max = 0;
	let start = 0;
	let window = '';
	let chars = s.split('');
	for (let i = 0; i < s.length; i++) {
		while (start < i && window.indexOf(chars[i]) > -1) {
			start++;
			window = s.substring(start, i);
		}
    window = s.substring(start, i + 1);
		max = Math.max(max, window.length);
	}
	return max;
}

const test1 = longestSubstringNoRepeat('abcabcbb');
console.log(test1); // 3

const test2 = longestSubstringNoRepeat('pwwkew');
console.log(test2); // 3

const test3 = longestSubstringNoRepeat('bbbbb');
console.log(test3);

const test4 = longestSubstringNoRepeat('dvdf');
console.log(test4);