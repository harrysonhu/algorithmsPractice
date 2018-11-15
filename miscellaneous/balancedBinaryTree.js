const isBalanced = root => {
    if (root === null) {
        return true;
    }
    const leftHeight = findHeight(root.left);
    const rightHeight = findHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true;
    }
    return false;
};

const findHeight = root => {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}