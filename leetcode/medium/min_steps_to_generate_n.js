function minStepsToGenerate(target) {
  let num = 1;
  let steps = 0;
  const seen = new Set();
  seen.add(1);

  while (num != target) {
    if (num > target && !seen.has(Math.floor(num / 3))) {
      num = Math.floor(num / 3);
    } else {
      num *= 2;
    }

    seen.add(num);
    steps++;
  }

  return steps;
}

function minStepsToGenerate(target) {
  const queue = [1];
  let steps = 0;

  while (queue.length) {
    const len = queue.length;
    steps++;

    for (let i = 0; i < len; i++) {
      let curr = queue.shift();
      let multiply = Math.floor(curr * 2);
      let divide = Math.floor(curr / 3);

      if (multiply === target || divide === target) {
        return steps;
      }

      queue.push(multiply);
      if (divide > 1) queue.push(divide);
    }
  }
}

console.log(minStepsToGenerate(3));
console.log(minStepsToGenerate(10));