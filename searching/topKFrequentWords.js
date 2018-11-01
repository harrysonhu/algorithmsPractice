const topKFrequentWords = (words, k) => {
	let map = new Map();
	for (let i = 0; i < words.length; i++) {
		map.set(words[i], (map.get(words[i]) || 0) + 1);
	}
	let buckets = new Array(words.length + 1).fill(null).map(() => []);
	for (let entry of map.entries()) {
		buckets[entry[1]].push(entry[0]);
	}
	let result = [];
	for (let i = buckets.length - 1; i >= 0; i--) {
		sortWords(buckets[i]);
		if (result.length < k) {
			result = result.concat(appendWords(buckets[i], k - result.length));
		}
	}
	return result;
};

const appendWords = (bucket, max) => {
	let temp = [];
	for (let j = 0; j < bucket.length; j++) {
		temp.push(bucket[j]);
		if (temp.length == max) {
			break;
		}
	}
	return temp;
};

const sortWords = words => {
	words.sort((a, b) => {
		return a.localeCompare(b);
	});
};

const test1 = topKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 2);
console.log(test1); // ['i', 'love']

const test2 = topKFrequentWords(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4);
console.log(test2); // ['the', 'is', 'sunny', 'day']

const test3 = topKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 3);
console.log(test3); // ['i', 'love', 'coding'] - coding comes before leetcode alphabetically
