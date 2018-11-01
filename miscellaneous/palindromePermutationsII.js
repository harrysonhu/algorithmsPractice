const palindromePermutationII = function(s) {
	const result = [];

	let map = {};
	let list = [];
	let mid = '';
	let used = new Array(s.length);

	const chars = s.split('');
	for (let i = 0; i < chars.length; i++) {
		if (map[chars[i]] == null) {
			map[chars[i]] = 1;
		} else {
			map[chars[i]]++;
		}
	}
	let odd = 0;
	for (let key of Object.keys(map)) {
		odd = odd + (map[key] % 2 !== 0 ? 1 : 0);
	}

	if (odd > 1) {
		return result;
	}

	for (let key of Object.keys(map)) {
		let value = map[key];
		if (value % 2 !== 0) {
			mid += key;
		}
		for (let i = 0; i < Math.floor(value / 2); i++) {
			list.push(key);
		}
	}
	generatePermutations(result, list, mid, '', used);

	return result;
} 

const generatePermutations = function(result, chars, mid, curr, used) {
	if (curr.length == chars.length) {
		const reversedString = curr.split('').reverse().join('');
		result.push(curr + mid + reversedString);

		return;
	}

	for (let i = 0; i < chars.length; i++) {
  	if (used[i]) {
    	continue;
    }
		if (i > 0 && chars[i] == chars[i - 1] && !used[i - 1]) {
			continue;
		}
		curr += chars[i];
		used[i] = true;
		generatePermutations(result, chars, mid, curr, used);

		curr = curr.substring(0, curr.length - 1);
		used[i] = false;
	}

}

let test1 = palindromePermutationII('acecarr'); //racecar
let test2 = palindromePermutationII('aabb'); // easy case
let test3 = palindromePermutationII('mouse'); // should be empty

console.log(test1);
console.log(test2);
console.log(test3);