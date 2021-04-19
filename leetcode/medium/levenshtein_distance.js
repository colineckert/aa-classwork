// O(nm) time | O(nm) space
function levenshteinDistance(str1, str2) {
	const edits = [];
	for (let r = 0; r < str2.length + 1; r++) {
		const row = [];
		for (let c = 0; c < str1.length + 1; c++) {
			row.push(c);
		}
		row[0] = r;
		edits.push(row);
	}

	for (let r = 1; r < str2.length + 1; r++) {
		for (let c = 1; c < str1.length + 1; c++) {
			if (str2[r - 1] === str1[c - 1]) {
				edits[r][c] = edits[r - 1][c - 1];
			} else {
				edits[r][c] = 1 + Math.min(edits[r - 1][c - 1], edits[r][c - 1], edits[r - 1][c]);
			}
		}
	}

	return edits[str2.length][str1.length];
}

// O(nm) time | O(min(n, m)) space
function levenshteinDistance(str1, str2) {
  let small = str1.length < str2.length ? str1 : str2;
  let big = str1.length >= str2.length ? str1 : str2;
	
	const evenEdits = [];
	const oddEdits = new Array(small.length + 1);
	
	for (let j = 0; j < small.length + 1; j++) {
		evenEdits.push(j);
	}
	
	for (let i = 1; i < big.length + 1; i++) {
		let currEdits, prevEdits;
		if (i % 2 === 1) {
			currEdits = oddEdits;
			prevEdits = evenEdits;
		} else {
			currEdits = evenEdits;
			prevEdits = oddEdits;
		}
		currEdits[0] = i;
		for (let j = 1; j < small.length + 1; j++) {
			if (big[i - 1] === small[j - 1]) {
				currEdits[j] = prevEdits[j - 1];
			} else {
				currEdits[j] = 1 + Math.min(prevEdits[j - 1], prevEdits[j], currEdits[j - 1]);
			}
		}
	}
	
	return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}