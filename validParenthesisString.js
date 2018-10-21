// Incomplete solution. Passed 48/58 test cases

const checkValidString = function(s) {
	let stars = 0;
	let stack = [];
	let parenthesis = s.split('');
	for (let i = 0; i < parenthesis.length; i++) {
		let curr = parenthesis[i];
		if (curr == '(') {
			stack.push(curr);
		} else if (curr == ')') {
			if (stack.length > 0) {
				stack.pop();
			} else if (stars > 0) {
				stars--;
			} else {
				return false;
			}
		} else {
			stars++;
		}
	}
	if (stack.length > 0) {
		return stack.length == stars;
	}
	return stack.length == 0;
};

const test1 = checkValidString(`(((((()*)(*)*))())())(()())())))((**)))))(()())()`);
console.log(test1); // false

const test2 = checkValidString(`**(`);
console.log(test2); // false

const test3 = checkValidString(`(***)`);
console.log(test3); // true

const test4 = checkValidString(`(*))`);
console.log(test4); // true