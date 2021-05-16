function candyCrush(string) {
  if (!string.length) return string;

  const stack = [];
  stack.push([string[0], 1]);

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      if (stack[stack.length - 1][1] >= 3) {
        stack.pop();
      }

      if (stack.length && stack[stack.length - 1][0] === string[i]) {
        stack[stack.length - 1][1] += 1;
      } else {
        stack.push([string[i], 1]);
      }

    } else {
      stack[stack.length - 1][1] += 1;
    }
  }

  if (stack[stack.length - 1][1] >= 3) {
    stack.pop();
  }

  let result = "";
  for (const letterCount of stack) {
    const repeats = letterCount[0].repeat(letterCount[1]);
    result += repeats;
  }

  return result;
}

console.log(candyCrush("aaaabbbc")) // c
console.log(candyCrush("aabbbacd")) // cd
console.log(candyCrush("aabbccddeeedcba")) // blank expected
console.log(candyCrush("aabbbaacd")) // cd
console.log(candyCrush("dddabbbbaccccaax")) // x