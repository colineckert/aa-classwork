// O(v^2 + e) time | O(v) space - where v is the number of 
// vertices and e is the number of edges in the input graph
function dijkstrasAlgorithm(start, edges) {
	const numVertices = edges.length;
	
	const minDistances = new Array(numVertices).fill(Infinity);
	minDistances[start] = 0;
	
	const visited = new Set();
	
	while (visited.size != numVertices) {
		const [vertex, currMinDistance] = getVertexWithMinDistance(minDistances, visited);
		
		if (currMinDistance === Infinity) break;
		
		visited.add(vertex);
		
		for (const edge of edges[vertex]) {
			const [destination, distanceToDestination] = edge;

			if (visited.has(destination)) continue;
			
			const newPathDistance = currMinDistance + distanceToDestination;
			const currDestinationDistance = minDistances[destination];
			if (newPathDistance < currDestinationDistance) {
				minDistances[destination] = newPathDistance;
			}
		}
	}
	
	return minDistances.map(x => (x === Infinity ? -1 : x));
}

function getVertexWithMinDistance(distances, visited) {
	let currMinDistance = Infinity;
	let vertex = -1;
	
	for (const [vertexIdx, distance] of distances.entries()) {
		
		if (visited.has(vertexIdx)) continue; // can't use this vertex

		if (distance <= currMinDistance) {
			vertex = vertexIdx;
			currMinDistance = distance;
		}
	}
	
	return [vertex, currMinDistance];
}