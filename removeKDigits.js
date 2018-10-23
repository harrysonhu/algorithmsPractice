const removeKdigits = function(num, k) {
	let stack = [];
	let numParts = num.split('');
	stack.push(numParts[0]);
	let top = 0;
	let pos = 1;
	while (stack.length > 0 && pos < numParts.length) {
		if (numParts[pos] < stack[top] && k > 0) {
			stack.pop();
      		k--;
		} else {
			top++;
		}
    	stack.push(numParts[pos]);
		pos++;
	}

	let index = null;
	for (let i = 0; i < stack.length; i++) {
		if (stack[i] != '0') {
			index = i;
			break;
		}
	}
	stack = stack.slice(index);
	return parseInt(stack.join(''));
};

const test1 = removeKdigits('1432219', 3);
console.log(test1);

const test2 = removeKdigits('10200', 1);
console.log(test2);