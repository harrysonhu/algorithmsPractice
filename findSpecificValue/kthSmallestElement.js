const kthSmallestElement = (root, k) => {
	if (root == null || k < 0) {
		return null;
	}
	const stack = [];
	while (stack.length > 0 || root != null) {
		while (root != null) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		k--;
		if (k == 0) {
			return root.val;
		}
		root = root.right;
	}
};

function Node(val) {
	this.val = val;
	this.left = this.right = null;
}

const five = new Node(5);
const three = new Node(3);
const six = new Node(6);
const two = new Node(2);
const four = new Node(4);
const one = new Node(1);
five.left = three;
five.right = six;
three.left = two;
three.right = four;
two.left = one;

const test1 = kthSmallestElement(five, 3);
console.log(test1); // 3

const test2 = kthSmallestElement(five, 6);
console.log(test2); // 6