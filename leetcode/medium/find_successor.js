// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Optimal: O(h) time | O(1) space
function findSuccessor(tree, node) {
  if (node.right !== null) return getLeftMostChild(node.right)
	
	return getRightMostParent(node);
}

function getLeftMostChild(node) {
	let currentNode = node;
	while (currentNode.left !== null) {
		currentNode = currentNode.left;
	}
	return currentNode;
}

function getRightMostParent(node) {
	let currentNode = node;
	while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
		currentNode = currentNode.parent;
	}
	return currentNode.parent;
}

// O(n) time | O(n) space - where n is the number of nodes in the tree
function findSuccessor(tree, node) {
  let nodesOrder = inOrderTraverse(tree);
	
  for (let i = 0; i < nodesOrder.length; i++) {
		let currVal = nodesOrder[i];
		let nextVal = nodesOrder[i + 1];
		if (node === currVal && nextVal !== null) return nextVal;
	}
	return null;
}

function inOrderTraverse(tree, nodesOrder = []) {
	if (!tree) return nodesOrder;
	
  inOrderTraverse(tree.left, nodesOrder);
	nodesOrder.push(tree);
	inOrderTraverse(tree.right, nodesOrder);
	
	return nodesOrder;
}