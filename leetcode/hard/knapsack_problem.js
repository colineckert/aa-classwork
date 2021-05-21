// O(nc) time | O(nc) space
function knapsackProblem(items, capacity) {
	const knapsackValues = new Array(items.length + 1).fill()
		.map(() => new Array(capacity + 1).fill(0));
	
	for (let i = 1; i < items.length + 1; i++) {
		const currWeight = items[i - 1][1];
		const currValue = items[i - 1][0];
		for (let c = 0; c < capacity + 1; c++) {
			if (currWeight > c) {
				knapsackValues[i][c] = knapsackValues[i - 1][c];
			} else {
				knapsackValues[i][c] = Math.max(
					knapsackValues[i - 1][c], 
					knapsackValues[i - 1][c - currWeight] + currValue,
				);
			}
		}
	}
  return [
    knapsackValues[items.length][capacity],
    getKnapsackItems(knapsackValues, items),
  ];
}

function getKnapsackItems(knapsackValues, items) {
	const sequence = [];
	let i = knapsackValues.length - 1;
	let c = knapsackValues[0].length - 1;
	while (i > 0) {
		if (knapsackValues[i][c] === knapsackValues[i - 1][c]) {
			i -= 1;
		} else {
			sequence.unshift(i - 1);
			c -= items[i - 1][1];
			i -= 1;
		}
		if (c === 0) break;
	}
	return sequence;
}
