const palindromePermutation = function(s) {
	const map = {};
	const chars = s.split('');
	for (let i = 0; i < chars.length; i++) {
		if (map[chars[i]] == null) {
			map[chars[i]] = 1;
		} else {
			delete map[chars[i]];
		}
	}
	const result = Object.keys(map).length <= 1;
	return result;
}

let test1 = palindromePermutation('nnaahh'); // true
let test2 = palindromePermutation(''); // base case, true
let test3 = palindromePermutation('lappe'); // false

console.log(test1);
console.log(test2);
console.log(test3);