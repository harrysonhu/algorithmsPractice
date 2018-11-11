const largestValues = root => {
	const valuesInEachLevel = [];
	traverseEachLevel(root, valuesInEachLevel, 0);
	const result = [];
	for (let level of valuesInEachLevel) {
		result.push(Math.max.apply(Math, level));
	}
	return result;
};
const traverseEachLevel = (root, result, level) => {
	if (root === null) {
		return;
	}
	if (level >= result.length) {
		result.push([]);
	}
	result[level].push(root.val);
	traverseEachLevel(root.left, result, level + 1);
	traverseEachLevel(root.right, result, level + 1);
};

function Node(val) {
	this.val = val;
	this.left = this.right = null;
}

const one = new Node(1);
const three = new Node(3);
const two = new Node(2);
const five = new Node(5);
const threeA = new Node(3);
const nine = new Node(9);
one.left = three;
one.right = two;
three.left = five;
three.right = threeA;
two.right = nine;

const test1 = largestValues(one);
console.log(test1);