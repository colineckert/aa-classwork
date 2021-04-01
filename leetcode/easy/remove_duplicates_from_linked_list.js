// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
	let currentNode = linkedList;
	
	while (currentNode !== null) {
		let nextDistinctNode = currentNode.next;
		
		while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
			nextDistinctNode = nextDistinctNode.next;
		}
		
		currentNode.next = nextDistinctNode;
		currentNode = nextDistinctNode;
	}
	
	return linkedList;
}