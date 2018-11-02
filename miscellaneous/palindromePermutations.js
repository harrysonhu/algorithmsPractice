const palindromePermutation = function(s) {
	let map = new Map();
	const chars = s.split('');
	for (let i = 0; i < chars.length; i++) {
		map.set(chars[i], (map.get(chars[i]) || 0) + 1);
		if (map.get(chars[i]) % 2 == 0) {
			map.delete(chars[i]);
		}
	}

	return map.size <= 1;
}

let test1 = palindromePermutation('nnaahh'); // true
let test2 = palindromePermutation(''); // base case, true
let test3 = palindromePermutation('lappe'); // false
let test4 = palindromePermutation('carerac'); // true

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);