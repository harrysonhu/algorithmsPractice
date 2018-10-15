const levelOrderTraversal = function(root) {
	let result = [];
	traversalHelper(result, root, 0);
	return result;
};

const traversalHelper = function(result, root, height) {
	if (root == null) {
		return;
	}
	if (height >= result.length) {
		result.push([]);
	}
	result[height].push(root.val);
	traversalHelper(result, root.left, height + 1);
	traversalHelper(result, root.right, height + 1);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const three = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const seven = new TreeNode(7);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

const test1 = levelOrderTraversal(three);
console.log(test1); // [[3], [9, 20], [15, 7]];

const test2 = levelOrderTraversal(null);
console.log(test2); // []