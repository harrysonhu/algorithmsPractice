const postorderTraversal = root => {
	let result = [];
	let stack = [];
	while (root != null || stack.length > 0) {
		if (root != null) {
			result.unshift(root.val);
			stack.push(root);
			root = root.right;
		} else {
			root = stack.pop();
			root = root.left;
		}
	}
	return result;
}

const TreeNode = val => {
	this.val = val;
	this.left = this.right = null;
};

const one = new TreeNode(1);
const four = new TreeNode(4);
const three = new TreeNode(3);
three.left = one;
three.right = four;

const five = new TreeNode(5);
const eight = new TreeNode(8);
const twelve = new TreeNode(12);
five.left = three;
eight.right = twelve;
five.right = eight;

const test1 = postorderTraversal(five);
console.log(test1); // [1, 4, 3, 12, 8, 5];

const test2 = postorderTraversal(null);
console.log(test2); // []