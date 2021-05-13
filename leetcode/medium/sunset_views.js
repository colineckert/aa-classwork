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

// O(n) time | O(n) space - where n is the length of the input array
function sunsetViews(buildings, direction) {
  const candidateBuildings = [];
	
	const startIdx = direction === 'EAST' ? 0 : buildings.length - 1;
	const step = direction === 'EAST' ? 1 : -1;
	
	let idx = startIdx;
	while (idx >= 0 && idx < buildings.length) {
		const buildingHeight = buildings[idx];
		
		while (
			candidateBuildings.length > 0 && 
			buildings[candidateBuildings[candidateBuildings.length -1]] <= buildingHeight
		) {
			candidateBuildings.pop();
		}
		
		candidateBuildings.push(idx);
		idx = idx + step;
	}
	
	if (direction === 'WEST') candidateBuildings.reverse();
	
	return candidateBuildings;
}