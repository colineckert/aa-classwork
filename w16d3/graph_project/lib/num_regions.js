// // orginal solution
// function numRegions(graph) {
//     let visited = new Set();
//     let count = 0;

//     for (let node in graph) {
//         if (!(visited.has(node))) count++;
//         depthFirstRecur(node, graph, visited, count);
//     }

//     return count;
// }

// function depthFirstRecur(node, graph, visited, count) {
//     if (visited.has(node)) return;

//     visited.add(node);

//     graph[node].forEach(neighbor => {
//         depthFirstRecur(neighbor, graph, visited, count);
//     })
// }

// better solution
function numRegions(graph) {
    let visited = new Set();
    let regions = 0;

    for (let node in graph) {
        if (isNewRegion(node, graph, visited)) regions++;
    }

    return regions;
}

function isNewRegion(node, graph, visited) {
    if (visited.has(node)) return false;

    visited.add(node);

    graph[node].forEach(neighbor => {
        isNewRegion(neighbor, graph, visited);
    })

    return true;
}

module.exports = {
    numRegions
};