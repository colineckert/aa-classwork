class TreeInfo {
	constructor(numNodesVisited, lastNodeVisitedValue) {
		this.numNodesVisited = numNodesVisited;
		this.lastNodeVisitedValue = lastNodeVisitedValue;
	}
}

// O(h + k) time | O(h) space - where h is the height of the tree and k is the input parameter
function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, null);
	reverseInOrderTraversal(tree, k, treeInfo);
	return treeInfo.lastNodeVisitedValue;
}

function reverseInOrderTraversal(node, k, treeInfo) {
	if (!node || treeInfo.numNodesVisited >= k) return;
	
	reverseInOrderTraversal(node.right, k, treeInfo);
	if (treeInfo.numNodesVisited < k) {
		treeInfo.numNodesVisited++;
		treeInfo.lastNodeVisitedValue = node.value;
		reverseInOrderTraversal(node.left, k, treeInfo);
	}
}

// O(n) time | O(n) space
function findKthLargestValueInBst(tree, k) {
  let nodes = [];
	inOrderTraversal(tree, nodes);
	return nodes[nodes.length - k];
}

function inOrderTraversal(bst, array) {
	if (!bst) return;
	
	inOrderTraversal(bst.left, array);
	array.push(bst.value);
	inOrderTraversal(bst.right, array);
	
	return array;
}