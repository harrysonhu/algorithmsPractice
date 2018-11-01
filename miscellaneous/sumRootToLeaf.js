const sumRootToLeaf = root => {
	let result = 0;
	let list = [];
	if (root == null) {
		return 0;
	}
	list.push(root);
	while (list.length > 0) {
		let node = list.pop();
		if (node.left == null && node.right == null) {
			result += node.val;
		}
		if (node.left != null) {
			list.push(node.left);
			node.left.val += node.val * 10;
		}
		if (node.right != null) {
			list.push(node.right);
			node.right.val += node.val * 10;
		}
	}
	return result;
}


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

const four = new TreeNode(4);
const nine = new TreeNode(9);
const zero = new TreeNode(0);
const five = new TreeNode(5);
const one = new TreeNode(1);

four.left = nine;
four.right = zero;
nine.left = five;
nine.right = one;

const test1 = sumRootToLeaf(four);
console.log(test1); // 1026