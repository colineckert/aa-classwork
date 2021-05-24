// O(nk) time | O(nk) space
function maxProfitWithKTransactions(prices, k) {
  if (!prices.length) return 0;
	
	const profits = new Array(k + 1).fill()
		.map(() => new Array(prices.length).fill(0));
	
	for (let t = 1; t < k + 1; t++) {
		let maxThusFar = -Infinity;
		for (let d = 1; d < prices.length; d++) {
			maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]);
			profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d]);
		}
	}
	
	return profits[k][prices.length - 1];
}

// O(nk) time | O(n) space
function maxProfitWithKTransactions(prices, k) {
  if (!prices.length) return 0;
	
	const evenProfits = new Array(prices.length).fill(0);
	const oddProfits = new Array(prices.length).fill(0);
	
	for (let t = 1; t < k + 1; t++) {
		let maxThusFar = -Infinity;
		let currentProfits, previousProfits;
		
		if (t % 2 === 1) {
			currentProfits = oddProfits;
			previousProfits = evenProfits;
		} else {
			currentProfits = evenProfits;
			previousProfits = oddProfits;
		}
		
		for (let d = 1; d < prices.length; d++) {			
			maxThusFar = Math.max(maxThusFar, previousProfits[d - 1] - prices[d - 1]);
			currentProfits[d] = Math.max(currentProfits[d - 1], maxThusFar + prices[d]);
		}
	}
	
	return k % 2 === 0 ? evenProfits[prices.length - 1] : oddProfits[prices.length - 1];
}
