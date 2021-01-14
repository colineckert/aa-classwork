function range(start, end) {
  if (end === start) { return [] };
  let nums = range(start, end - 1);
  nums.push(end - 1);
  return nums;
}

// console.log(range(1, 10))


function sumRec(arr) {
  if (arr.length === 0) { return 0 };
  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1, 2, 3, 4, 5]))


function exp1(base, n) {
  return n === 0 ? 1 : (base * exp1(base, n - 1));
}

// console.log(exp1(3, 2));
// console.log(exp1(3, 3));
// console.log(exp1(2, 3));

function exp2(base, n) {
  if (n === 0) { return 1 };
  
  if ( n % 2 === 0 ) {
    let r = exp2(base, n / 2);
    return r * r;
  } else {
    let r = (exp2(base, (n - 1) / 2));
    return base * (r * r);
  }
}

// console.log(exp2(3, 2));
// console.log(exp2(3, 3));
// console.log(exp2(2, 3));

function fibonacci(n) {
  if (n === 1) { return [1] };
  if (n === 2) { return [1, 1] };

  let seq = fibonacci(n - 1)
  seq.push(seq[seq.length - 1] + seq[seq.length - 2])
  return seq;
}

// console.log(fibonacci(2))
// console.log(fibonacci(4))
// console.log(fibonacci(6))

function deepDup(arr) {
  // if (!Array.isArray(arr)) {
  //   return arr;
  // }
  return arr.map(el => {
    return (Array.isArray(el) ? deepDup(el) : el);
  });
}

const array = [[2], 3];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);