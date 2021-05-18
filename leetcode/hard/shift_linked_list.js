// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space
function shiftLinkedList(head, k) {	
	let length = 1;
  let tail = head;
	while (tail.next !== null) {
		tail = tail.next;
		length++;
	}
	
	const offset = Math.abs(k) % length;
	if (offset == 0) return head;
	
	let newTailPos = k > 0 ? length - offset : offset;
	let newTail = head;
	for (let i = 1; i < newTailPos; i++) {
		newTail = newTail.next;
	} 
	
	let newHead = newTail.next;
	newTail.next = null;
	tail.next = head;
	return newHead;
}