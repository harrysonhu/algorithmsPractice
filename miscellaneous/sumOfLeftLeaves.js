const sumOfLeftLeaves = root => {
	let result = 0;
	let stack = [];
    if (root == null) {
        return 0;
    }
    stack.push(root);
	while (stack.length > 0) {
        root = stack.pop();
		if (root.left != null) {
            stack.push(root.left);
            if (root.left.left == null && root.left.right == null) {
                result += root.left.val;    
            }
		}
		if (root.right != null) {
			stack.push(root.right);
		}
	}

	return result;
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

const test1 = sumOfLeftLeaves(three);
console.log(test1);