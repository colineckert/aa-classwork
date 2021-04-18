// O(nd) time | O(n) space
function minNumberOfCoinsForChange(n, denoms) {
  const numCoins = new Array(n + 1).fill(Infinity);
	
	numCoins[0] = 0;
	for (const coin of denoms) {
		for (let amt = 0; amt < numCoins.length; amt++) {
			if (coin <= amt) {
				numCoins[amt] = Math.min(numCoins[amt], numCoins[amt - coin] + 1);
			}
		}
	}
	return numCoins[n] !== Infinity ? numCoins[n] : -1;
}