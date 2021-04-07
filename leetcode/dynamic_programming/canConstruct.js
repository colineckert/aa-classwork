// m = target.length -> height of tree
// n = wordBank.length
// O(n * m^2) time | O(m^2) space
const canConstruct = (target, wordBank, memo) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    // checks if the word starts at index 0
    if (target.indexOf(word) === 0) {
      // slice off the prefix 
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}