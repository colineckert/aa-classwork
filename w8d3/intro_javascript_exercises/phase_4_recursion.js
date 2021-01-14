function range(start, end) {
  if (end === start) { return [start] };
  return [start] + range(start + 1, end);
}

// console.log(range(1, 10));