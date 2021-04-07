// O(m^2*n) time | O(m^2) space
// m^2 bc we need to copy the array into the next value
const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [ ...table[i], num ];
      }
    }
  }
  return table[targetSum];
}