// O(nlog(n)) time | O(1) space
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    
    let total = 0;
    let n = Math.floor(costs.length / 2);
 
    for (let i = 0; i < n; i++) {
        total += costs[i][0] + costs[i + n][1];
    }
    
    return total;
};

// alt - same time/space
var twoCitySchedCost = function(costs) {
    const n = costs.length / 2;
    costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
    
    let a = 0, b = 0, total = 0;
    for (const cost of costs) {
        if (cost[0] <= cost[1] && a < n) {
            total += cost[0];
            a++;
        } else if (cost[0] >= cost[1] && b < n) {
            total += cost[1];
            b++;
        } else {
            total += a < n ? cost[0] : cost[1];
        }
    }
    
    return total;
};