const preorderTraversal = function(root) {
	const stack = [];
	const result = [];
	while (root != null || stack.length > 0) {
		if (root == null) {
			root = stack.pop();
		}
		if (root.right != null) {
			stack.push(root.right);
		}
		result.push(root.val);
		root = root.left;
	}

	return result;
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

const test1 = preorderTraversal(null);
console.log(test1); // []

const five = new TreeNode(5);
const three = new TreeNode(3);
const eight = new TreeNode(8);
const two = new TreeNode(2);
const four = new TreeNode(4);
five.left = three;
five.right = eight;
three.left = two;
three.right = four;

const test2 = preorderTraversal(five);
console.log(test2); // [5, 3, 2, 4, 8]