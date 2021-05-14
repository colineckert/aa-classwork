// O(nlog(n)) time
var invalidTransactions = function(transactions) {
    let info = [];
    
    for (let transaction of transactions) {
        let [name, time, amount, city] = transaction.split(',');
        info.push({name, time, amount, city, raw: transaction});
    }
    
    info.sort((a, b) => Number(a.time) - Number(b.time));
    
    let invalidIdx = new Set();
    let invalidTransactions = [];
    
    for (let i = 0; i < info.length; i ++) {
        if (info[i].amount > 1000) {
            if (!invalidIdx.has(i)) {
                invalidTransactions.push(info[i].raw);
                invalidIdx.add(i);
            }
        }
    }
    
    for (let i = 0; i < info.length - 1; i ++) {
        let curr = info[i];
        for (let next = i + 1; next < info.length; next ++) {
            if (info[next].time - curr.time > 60) break;
            if (info[next].name === curr.name && info[next].city !== curr.city) {
                if (!invalidIdx.has(i)) {
                    invalidTransactions.push(curr.raw);
                    invalidIdx.add(i);
                }
                if (!invalidIdx.has(next)) {
                    invalidTransactions.push(info[next].raw);
                    invalidIdx.add(next);
                }
            }
        }
    }
    
    return [...invalidTransactions];
};

// O(n^2) time
// var invalidTransactions = function(transactions) {
//     const n = transactions.length;
//     const invalid = [];
//     const added = new Array(n).fill(false);
    
//     for (let i = 0; i < n; i++) {
//         let [name1, time1, amount1, city1] = transactions[i].split(',');
        
//         if (parseInt(amount1) > 1000 && !added[i]) {
//             invalid.push(transactions[i]);
//             added[i] = true;
//         }
        
//         for (let j = i + 1; j < n; j++) {
//             let [name2, time2, amount2, city2] = transactions[j].split(',');
            
//             if (Math.abs(time1 - time2) <= 60 && name1 === name2 && city1 !== city2) {
                
//                 if (!added[j]) {
//                     invalid.push(transactions[j]);
//                     added[j] = true;
//                 }
                
//                 if (!added[i]) {
//                     invalid.push(transactions[i]);
//                     added[i] = true;
//                 }
//             }
//         }
//     }
    
//     return invalid;
// };