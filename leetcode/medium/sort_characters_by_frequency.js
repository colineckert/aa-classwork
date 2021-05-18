// O(nlog(n)) time | O(n) space
var frequencySort = function(s) {
    const count = {};
    s.split('').forEach(char => {
        count[char] ? count[char]++ : count[char] = 1;
    });
    
    const sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);
    let res = '';
    for (let letter of sorted) {
        res += letter.repeat(count[letter]);
    }
    
    return res;
};

// bucket approach
// O(n) time | O(n) space
var frequencySort = function(s) {
    const freq = {};
    for (const char of s) {
        freq[char] ? freq[char]++ : freq[char] = 1;
    }
    
    const maxFreq = Math.max(...Object.values(freq));
    const buckets = [];
    for (let i = 0; i <= maxFreq; i++) {
        buckets.push([]);
    }
    
    for (const char in freq) {
        let count = freq[char];
        buckets[count].push(char);
    }
    
    let res = [];
    for (let i = 0; i < buckets.length; i++) {
        for (char of buckets[i]) res.unshift(char.repeat(i));
    }
    
    return res.join('');
};