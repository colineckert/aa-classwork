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
  return arr.map(el => {
    return (el instanceof Array ? deepDup(el) : el);
  });
}

// const array = [[2], 3];
// const dupedArray = deepDup(array);
// console.log(`deepDup original = ${JSON.stringify(array)}`);

// dupedArray[0].push(4);

// console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
// console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

function bsearch(arr, target) {
  if (arr.length === 0) return -1;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1);
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(left, target);
  } else {
    let search_right = bsearch(right, target);
    return (search_right === -1) ? -1 : search_right + (mid + 1);
  }
}

// console.log(bsearch([1, 2, 3, 4, 5], 4))
// console.log(bsearch([1, 2, 3, 4, 5], 6))
// console.log(bsearch([1, 2, 3, 4, 5], 2))

function mergesort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  
  let sortedLeft = mergesort(left);
  let sortedRight = mergesort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const mergedArr = [];
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }

  return mergedArr.concat(left, right);
}

// console.log(mergesort([5, 2, 1, 6, 5, 4]))

// function subsets(arr) {
//   if (arr.length <= 1) return arr;

//   return arr[0] + subsets(arr.slice(1))
// }

// console.log(subsets([1, 2, 3, 4, 5]))

// subsets
function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const withoutFirst = subsets(array.slice(1));
  
  const withFirst = withoutFirst.map(sub => [first].concat(sub));
  
  return withoutFirst.concat(withFirst);
}

console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);