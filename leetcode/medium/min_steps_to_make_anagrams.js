// O(n) time | O(1) space - since there are max 26 letters in alphabet
var minSteps = function(s, t) {
    const count = {};
    let steps = 0;
    
    for (const letter of s) {
        count[letter] ? count[letter]++ : count[letter] = 1;
    }
    
    for (const letter of t) {
        count[letter] ? count[letter]-- : steps++;
    }
    
    return steps;
};