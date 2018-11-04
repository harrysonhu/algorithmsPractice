const isSameTree = (p, q) => {
	if (p == null && q == null) {
		return true;
	}
	if (p == null || q == null) {
		return false;
	}
	if (p.val == q.val) {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	}
	return false
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
one.left = two;
one.right = three;

const test1 = isSameTree(one, one);
console.log(test1); // true

const test2 = isSameTree(one, null);
console.log(test2); // false

const test3 = isSameTree(null, null);
console.log(test3); // true