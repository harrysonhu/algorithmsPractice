let max = Number.MIN_SAFE_INTEGER;
const maxPathSum = root => {
	findMaxHelper(root);
	return max;
};

const findMaxHelper = (root) => {
	if (root == null) {
		return 0;
	}
	let left = Math.max(findMaxHelper(root.left), 0);
	let right = Math.max(findMaxHelper(root.right), 0);
	max = Math.max(max, root.val + left + right);

	return root.val + Math.max(left, right);
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

const nTen = new TreeNode(-10);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const seven = new TreeNode(7);

nTen.left = nine;
nTen.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

const test1 = maxPathSum(nTen);
console.log(test1);