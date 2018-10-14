function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

const inorderTraversal = function(root) {
	const stack = [];
	const result = [];
	while (root != null || stack.length > 0) {
		while (root != null) {
			stack.push(root);
			root = root.left;
		}
		root = stack.pop();
		result.push(root.val);
		root = root.right;
	}
	return result;
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

const test1 = inorderTraversal(null);
console.log(test1); // []

const test2 = inorderTraversal(five);
console.log(test2); // [1, 3, 4, 5, 8, 12]

