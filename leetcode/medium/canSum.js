// O(m * n) time | O(m) space
const canSum = (targetSum, numbers, memo={}) => { 
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of  numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numberse, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
}