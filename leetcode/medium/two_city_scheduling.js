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