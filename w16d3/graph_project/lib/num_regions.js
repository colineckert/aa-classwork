function numRegions(graph) {
    let visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (!(visited.has(node))) count++;
        depthFirstRecur(node, graph, visited, count);
    }

    return count;
}

function depthFirstRecur(node, graph, visited, count) {
    if (visited.has(node)) return;

    visited.add(node);

    graph[node].forEach(neighbor => {
        depthFirstRecur(neighbor, graph, visited, count);
    })
}

module.exports = {
    numRegions
};