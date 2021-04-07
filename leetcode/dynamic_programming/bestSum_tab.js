// O(m^2*n) time | O(m^2) space
// m^2 bc we need to copy the array into the next value
const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [ ...table[i], num ];
        // if this current combination is shorter than what is already stored
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
}