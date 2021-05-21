// O(n) time | O(1) space
function validStartingCity(distances, fuel, mpg) {
  const numCities = distances.length;
	let milesRemaining = 0;
	
	let idxOfStartingCityCandidate = 0;
	let milesRemainingAtStartingCityCandidate = 0;
	
	for (let cityIdx = 1; cityIdx < numCities; cityIdx++) {
		const distanceFromPrevCity = distances[cityIdx - 1];
		const fuelFromPrevCity = fuel[cityIdx - 1];
		milesRemaining += (fuelFromPrevCity * mpg) - distanceFromPrevCity;
		
		if (milesRemaining < milesRemainingAtStartingCityCandidate) {
			milesRemainingAtStartingCityCandidate = milesRemaining;
			idxOfStartingCityCandidate = cityIdx;
		}
	}
	
	return idxOfStartingCityCandidate;
}

// O(n) time | O(n) space
function validStartingCity(distances, fuel, mpg) {
	const fuelAtCity = new Array(fuel.length).fill(0);
	for (let i = 1; i < distances.length; i++) {
		fuelAtCity[i] = ((fuel[i - 1] * mpg) + fuelAtCity[i - 1]) - distances[i - 1];
	}
	
	const startingCity = Math.min(...fuelAtCity);
	
	for (let i = 0; i < fuelAtCity.length; i++) {
		if (startingCity === fuelAtCity[i]) return i;
	}
}
