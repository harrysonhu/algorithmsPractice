const removeKdigits = function(num, k) {
	let digitsRemaining = num.length - k;
	let stack = [];
	let numParts = num.split('');
	let top = 0;

	for (let i = 0; i < num.length; i++) {
		let char = numParts[i];
		while (top > 0 && stack[top - 1] > char && k > 0) {
			top--;
			k--;
		}
		stack[top] = char;
    	top++;
	}

	let index = 0;
	while (index < stack.length && stack[index] == '0') {
  		index++;
  	}
  	if (index == digitsRemaining) {	
  		return '0';
  	} else {
  		return stack.join('').substring(index, digitsRemaining);
  	}
};
const test0 = removeKdigits('1234567890', 9);
console.log(test0); // 0

const test1 = removeKdigits('1432219', 3);
console.log(test1); // 1219

const test2 = removeKdigits('112', 1);
console.log(test2); // 11

const test3 = removeKdigits('100', 1);
console.log(test3); // 0

const test4 = removeKdigits('10200', 1);
console.log(test4); // 200