var minKnightMoves = function (x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  const dirs = [
    [-2, -1],
    [-2, +1], 
    [-1, -2],
    [+1, -2], 
    [+2, -1],
    [+2, +1], 
    [-1, +2],
    [+1, +2],
  ]; 

  const queue = [[0, 0, 0]];
  const visited = new Set();

  while (queue.length) {
    const [currX, currY, counter] = queue.shift();

    if (currX === x && currY === y) return counter;

    for (const d of dirs) {
      let nextX = currX + d[0],
        nextY = currY + d[1];

      const hash = nextX + ',' + nextY;
      if (!visited.has(hash) && nextX >= -1 && nextY >= -1) {
        queue.push([nextX, nextY, counter + 1]);
        visited.add(nextX + ',' + nextY);
      }
    }
  }

  return -1;
};
