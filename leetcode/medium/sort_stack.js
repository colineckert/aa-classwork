// O(n^2) time |O(n) space
function sortStack(stack) {
  if (stack.length === 0) return stack;
	
	const top = stack.pop();
	sortStack(stack);
	insertInSortedStack(stack, top);
	
	return stack;
}

function insertInSortedStack(stack, val) {
	if (val >= stack[stack.length - 1] || stack.length === 0) {
		stack.push(val);
	} else {
		const top = stack.pop();
		insertInSortedStack(stack, val);
		stack.push(top);
	}
	
	return stack;
}
