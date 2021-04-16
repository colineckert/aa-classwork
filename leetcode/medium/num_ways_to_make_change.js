// O(nd) time | O(n) space
function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);
	ways[0] = 1;
	
	for (const coin of denoms) {
		for (let amt = 1; amt < ways.length; amt++) {
			if (coin <= amt) {
				ways[amt] += ways[amt - coin];
			}
		}
	}
	return ways[n];
}