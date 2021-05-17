// O(log(n)) time | O(1) space
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    let number = x;
    let remainder, rev = 0;
    
    while (number >= 1) {
        remainder = (number % 10)
        rev = rev * 10 + remainder
        number = Math.floor(number / 10);
    }
    
    return rev == x;
};