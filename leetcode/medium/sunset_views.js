// O(n) time | O(n) space - where n is the length of the input array
function sunsetViews(buildings, direction) {
	const buildingsWithSunsetView = [];
	
  const startIdx = direction === 'WEST' ? 0 : buildings.length - 1;
	const step = direction === 'WEST' ? 1 : -1;
	
	let idx = startIdx;
	let runningMaxHeight = 0;
	
	while (idx >= 0 && idx < buildings.length) {
		const buildingHeight = buildings[idx];
		
		if (buildingHeight > runningMaxHeight) buildingsWithSunsetView.push(idx);
		
		runningMaxHeight = Math.max(runningMaxHeight, buildingHeight);
		
		idx = idx + step;
	}
	
	if (direction === 'EAST') buildingsWithSunsetView.reverse();
	
	return buildingsWithSunsetView;
}
