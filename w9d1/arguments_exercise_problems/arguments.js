// v1: arguments
function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

// v2 ... operator
function sum2(...args) {
  return args.reduce( (acc, el) => acc + el);
}

console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 4, 5));