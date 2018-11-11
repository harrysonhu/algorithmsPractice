const validParentheses = parentheses => {
	const stack = [];
	const parts = parentheses.split('');
	for (let i = 0; i < parts.length; i++) {
		if (parts[i] == '(' || parts[i] == '{' || parts[i] == '[') {
			stack.push(parts[i]);
		} else {
			switch (parts[i]) {
				case ')':
					if (stack.pop() != '(') {
						return false;
					}
					break;
				case '}':
					if (stack.pop() != '{') {
						return false;
					}
					break;
				case ']':
					if (stack.pop() != '[') {
						return false;
					}
					break;
			}
		}
	}
	return stack.length == 0;
}

const test1 = validParentheses('()');
console.log(test1);

const test2 = validParentheses('()[]{}');
console.log(test2);

const test3 = validParentheses('([)]{}');
console.log(test3);

const test4 = validParentheses('({[]})');
console.log(test4);