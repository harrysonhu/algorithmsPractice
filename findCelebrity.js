const findCelebrity = n => {
	if (n <= 1) {
		return -1;
	}
	let left = 0;
	let right = n - 1;
	while (left < right) {
		if (knows(left, right)) {
			left++;
		} else {
			right--;
		}
	}
	let candidate = right;
	for (let i = 0; i < n; i++) {
		if (i != candidate && (!knows(i, candidate) || knows(candidate, i))) {
			return -1;
		}
	}
	return candidate;
};

const test1 = findCelebrity(7); // [0, 1, 2, 3, 4, 5, 6]
// Assume celebrity is 4, and 0 doesn't know 5 and 6. Then right will decrement to 4. Everyone to the left of
// 4 knows 4 because that is the criteria of a celebrity. Left will increment until it is equal to 4 and
// the while loop will break. Let the candidate be equal to right (4).
// We loop through everyone again, and we check if everyone knows 4 and 4 doesn't know anyone.
// By the definition of a celebrity, everyone other than 4 will know who 4 is and 4 will not know anyone else.
// Thus, 4 is the celebrity and we return candidate.