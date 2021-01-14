function range(start, end) {
  if (end === start) { return [] };
  return [start] + range(start + 1, end);
}

console.log(range(1, 10))


function sumRec(arr) {
  if (arr.length === 0) { return 0 };
  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1, 2, 3, 4, 5]))


function exp1(base, exp) {
  return exp === 0 ? 1 : (base * exp1(base, exp - 1));
}

console.log(exp1(3, 2));
console.log(exp1(3, 3));
console.log(exp1(2, 3));

// function exp2(base, exp) {

// }