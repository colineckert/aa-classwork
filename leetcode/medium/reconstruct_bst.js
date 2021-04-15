// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
	constructor(rootIdx) {
		this.rootIdx = rootIdx;
	}
}

// O(n) time | O(n) space - where n is the length of the input array
function reconstructBst(preOrderTraversalValues) {
  let treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo) {
	if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;
	
	let rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
	if (rootValue < lowerBound || rootValue >= upperBound) return null;

	currentSubtreeInfo.rootIdx++;
	
	let leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
	let rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
	
	return new BST(rootValue, leftSubtree, rightSubtree);
}

// O(n^2) time | O(n) space - where n is the length of the input array
function reconstructBst(preOrderTraversalValues) {
	if (preOrderTraversalValues.length) return null;
	
	const currValue = preOrderTraversalValues[0];
	let rightSubtreeRootIdx = preOrderTraversalValues.length;
	
	for (let i = 1; i < preOrderTraversalValues.length; i++) {
		if (preOrderTraversalValues[i] >= currValue) {
			rightSubtreeRootIdx = i;
			break;
		}
	}
	
	let leftTree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
	let rightTree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
	
	return new BST(currValue, leftTree, rightTree);
}