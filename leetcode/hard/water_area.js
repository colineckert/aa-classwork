function waterArea(heights) {
	if (heights == null || heights.length === 0) return 0;
	
	const length = heights.length;
  const leftMax = {};
	const rightMax = {};
	let ans = 0;
	
	leftMax[0] = heights[0];
	for (let i = 1; i < length; i++) {
		leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
	}
	
	rightMax[length - 1] = heights[length - 1];
	for (let i = length - 2; i >= 0; i--) {
		rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
	}
	
	for (let i = 0; i < length; i++) {
		ans += Math.min(leftMax[i], rightMax[i]) - heights[i];
	}
	
	return ans;
}
