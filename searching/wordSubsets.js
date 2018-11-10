const wordSubsets = (A, B) => {
	const result = [];
	for (let word of A) {
		for (let i = 0; i < B.length; i++) {
			if (!isSubset(B[i], word)) {
				break;
			}
			if (i == B.length - 1) {
				result.push(word);
			}
		}
	}
	return result;
};

const isSubset = (subWord, word) => {
	const subWordChars = subWord.split('');
  const wordChars = word.split('');
	for (let i = 0; i < subWordChars.length; i++) {  
    const pos = wordChars.indexOf(subWordChars[i]);
		if (pos === -1) {
			return false;
		}
		wordChars.splice(pos, 1);
    
	}
	return true;
};

const test1 = wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","oo"]);
console.log(test1);

const test2 = wordSubsets(["amazon","apple","facebook","google","leetcode"], ["ec","oc","ceo"]);
console.log(test2);

const test3 = wordSubsets(["amazon","apple","facebook","google","leetcode"], ["l","e"]);
console.log(test3);

const test4 = wordSubsets(["cdbbceaabd","bcccacddcd","aacdcbcdce","eccaddcaaa","dacbbaeeeb","eedebaccea","dcbcededeb","ebdbabccce","cdeddacede","abaececeed"], ["dac","be","c","a","ed"]);
console.log(test4);