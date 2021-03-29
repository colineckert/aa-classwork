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

module.exports = {
    maxValue
};