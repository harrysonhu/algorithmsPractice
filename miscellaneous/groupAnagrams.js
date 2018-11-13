const groupAnagrams = strings => {
	const result = [];
	if (strings == null || strings.length == 0) {
		return result;
	}
	let map = new Map();
	for (let i = 0; i < strings.length; i++) {
		const key = strings[i].split('').sort().join('');
		if (map.get(key) == null) {
			map.set(key, []);
		}
		map.get(key).push(strings[i]);
	}
	for (let entry of map.entries()) {
		result.push(entry[1]);
	}

	return result;
};

const test1 = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(test1);