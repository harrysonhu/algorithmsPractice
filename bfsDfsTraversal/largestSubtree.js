const largestSubtree = root => {
	if (root == null) {
		return 0;
	}
	if (isValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)) {
		return countNodes(root);
	}
	return Math.max(largestSubtree(root.left), largestSubtree(root.right));
};

const isValidBST = (root, min, max) => {
	if (root == null) {
		return true;
	}
	if (root.val <= min || root.val >= max) {
		return false;
	}
	return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

const countNodes = root => {
	if (root == null) {
		return 0;
	}
	return countNodes(root.left) + countNodes(root.right) + 1;
};

function Node(val) {
	this.val = val;
	this.left = this.right = null;
}

const ten = new Node(10);
const fifteen = new Node(15);
const five = new Node(5);
const one = new Node(1);
const eight = new Node(8);
const seven = new Node(7);

ten.left = five;
ten.right = fifteen;
five.left = one;
five.right = eight;
fifteen.right = seven;

const test1 = largestSubtree(ten);
console.log(test1);