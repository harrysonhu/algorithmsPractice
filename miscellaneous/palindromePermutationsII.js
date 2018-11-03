const palindromePermutationII = s => {
	let map = new Map();
	let chars = s.split('');
	for (let i = 0; i < chars.length; i++) {
		map.set(chars[i], (map.get(chars[i]) || 0) + 1);
	}
	let odd = 0;
	for (let entry of map.entries()) {
		if (entry[1] % 2 != 0) {
			odd++;
		}
	}
	if (odd > 1) {
		return result;
	}
	let mid = '';
	let result = [];
	let list = [];
	for (let entry of map.entries()) {
		if (entry[1] % 2 != 0) {
			mid += entry[0];
		}
		for (let i = 0; i < Math.floor(entry[1] / 2); i++) {
			list.push(entry[0]);
		}
	}
	const used = new Array(s.length);
	generatePermutations(result, list, mid, '', used);
	return result;
};

const generatePermutations = (result, list, mid, temp, used) => {
	if (temp.length == list.length) {
		const finalString = temp + mid + temp.split('').reverse().join('');
		result.push(finalString);
	}
	for (let i = 0; i < list.length; i++) {
		if (used[i] || (i > 0 && (list[i] == list[i - 1] && !used[i - 1]))) {
			continue;
		}
		used[i] = true;
		temp += list[i];
		generatePermutations(result, list, mid, temp, used);
		used[i] = false;
		temp = temp.substring(0, temp.length - 1);
	}
};

let test1 = palindromePermutationII('acecarr'); //racecar
let test2 = palindromePermutationII('aabb'); // easy case
let test3 = palindromePermutationII('mouse'); // should be empty

console.log(test1);
console.log(test2);
console.log(test3);