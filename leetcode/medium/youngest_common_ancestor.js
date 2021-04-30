// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// O(d) time | O(1) space - where d is the depth (height) of the tree
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	const depthOne = getDescendantDepth(descendantOne, topAncestor);
	const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
	if (depthOne > depthTwo) {
		return backtraceAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo);
	} else {
		return backtraceAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
	}
}

function getDescendantDepth(descendant, topAncestor) {
	let depth = 0;
	while(descendant !== topAncestor) {
		depth++;
		descendant = descendant.ancestor;
	}
	return depth;
}

function backtraceAncestralTree(lowerDescendant, higherDescendant, diff) {
	while (diff > 0) {
		lowerDescendant = lowerDescendant.ancestor;
		diff--;
	}
	while (lowerDescendant !== higherDescendant) {
		lowerDescendant = lowerDescendant.ancestor;
		higherDescendant = higherDescendant.ancestor;
	}
	return lowerDescendant;
}