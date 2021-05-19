// This is the class of the input root. Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space
function flattenBinaryTree(root) {
	let inOrderNodes = getNodesInOrder(root, []);
	for (let i = 0; i < inOrderNodes.length - 1; i++) {
		let leftNode = inOrderNodes[i];
		let rightNode = inOrderNodes[i + 1];
		leftNode.right = rightNode;
		rightNode.left = leftNode;
	}
	return inOrderNodes[0];
}

function getNodesInOrder(tree, array) {
	if (!tree) return;
	
	getNodesInOrder(tree.left, array);
	array.push(tree);
	getNodesInOrder(tree.right, array);
	
	return array;
}

// O(n) time | O(d) space - where n is the number of nodes in the Binary Tree
// and d is the depth (height) of the Binary Tree
function flattenBinaryTree(root) {
  const [leftMost, _] = flattenTree(root);
	return leftMost;
}

function flattenTree(node) {
	let leftMost, rightMost;
	
	if (!node.left) {
		leftMost = node;
	} else {
		const [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenTree(node.left);
		connectNodes(leftSubtreeRightMost, node);
		leftMost = leftSubtreeLeftMost;
	}
	
	if (!node.right) {
		rightMost = node;
	} else {
		const [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenTree(node.right);
		connectNodes(node, rightSubtreeLeftMost);
		rightMost = rightSubtreeRightMost;
	}
	
	return [leftMost, rightMost];
}

function connectNodes(left, right) {
	left.right = right;
	right.left = left;
}
