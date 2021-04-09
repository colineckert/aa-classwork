// O(n) time | O(logn) or O(d) where d is the depth of the tree
function invertBinaryTree(tree) {
  if (tree === null) return;

	let leftTree = tree.left;
	let rightTree = tree.right;
	tree.left = rightTree;
	tree.right = leftTree;

	invertBinaryTree(tree.left);
	invertBinaryTree(tree.right);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}