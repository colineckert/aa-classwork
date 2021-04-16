// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
	if (!tree) return true;
	
	const leftTreeHeight = treeHeight(tree.left);
	const rightTreeHeight = treeHeight(tree.right);
	const isBalanced = Math.abs(leftTreeHeight - rightTreeHeight) <= 1;
	
	return isBalanced 
		&& heightBalancedBinaryTree(tree.left)
		&& heightBalancedBinaryTree(tree.right);
}

function treeHeight(root) {
	if (!root) return -1;
	return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}