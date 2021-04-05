// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(h) space - where n is the number of nodes in the Binary Tree
// and h is the height of the Binary Tree

// solution 1
function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

// solution 2
function nodeDepths(root) {
	let sumDepths = 0;
	const stack = [{ node: root, depth: 0 }];
	
	while (stack.length > 0) {
		const { node, depth } = stack.pop();
		if (node === null) continue;
		sumDepths += depth;
		stack.push({ node: node.left, depth: depth + 1 });
		stack.push({ node: node.right, depth: depth + 1 });
	}
	
	return sumDepths;
}