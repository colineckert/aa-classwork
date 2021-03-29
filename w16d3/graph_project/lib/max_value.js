// iterative with BFS
function maxValue(node, visited=new Set()) {
    let max = node.val;
    let queue = [ node ];

    while (queue.length) {
        let currNode = queue.shift();
        if (visited.has(currNode)) continue;

        if (max <= currNode.val) max = currNode.val;

        visited.add(currNode);
        queue.push(...currNode.neighbors);
    }

    return max;
}

// alt recursive solution
// function maxValue(node, visited=new Set()) {
//     if (visited.has(node)) return -Infinity;
//     visited.add(node);
//     let neighborMaxes = node.neighbors.map(neighbor => maxValue(neighbor, visited));
//     return Math.max(node.val, ...neighborMaxes);
// }

module.exports = {
    maxValue
};