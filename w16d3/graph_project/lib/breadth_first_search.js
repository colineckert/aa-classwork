function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let queue = [ startingNode ];

    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;

        if (targetVal === node.val) return node;
        
        visited.add(node);
        queue.push(...node.neighbors);
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};