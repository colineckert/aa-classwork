// O(v + e) time | O(v) space - where v is the number of vertices
// and e is the number of edges in the graph
function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
	const visited = new Array(numberOfNodes).fill(false);
	const inStack = new Array(numberOfNodes).fill(false);
	
	for (let node = 0; node < numberOfNodes; node++) {
		if (visited[node]) continue;
		
		const containsCycle = isNodeInCycle(node, edges, visited, inStack);
		if (containsCycle) return true;
	}
	
  return false;
}

function isNodeInCycle(node, edges, visited, inStack) {
	visited[node] = true;
	inStack[node] = true;
	
	const neighbors = edges[node];
	for (const neighbor of neighbors) {
		if (!visited[neighbor]) {
			const containsCycle = isNodeInCycle(neighbor, edges, visited, inStack);
			if (containsCycle) return true;
		} else if (inStack[neighbor]) {
			return true;
		}
	}
	
	inStack[node] = false;
	return false;
}
