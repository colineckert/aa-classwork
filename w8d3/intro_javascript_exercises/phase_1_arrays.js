// Array#uniq
Array.prototype.uniq = function () {
  let newArr = [];

  this.forEach(el => {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  })
  return newArr;
}

// console.log([1, 2, 2, 3, 3, 3].uniq())

// Array#twoSum
Array.prototype.twoSum = function () {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr;
};

// console.log([1, 2, 3, -2, -3].twoSum()); /* [[1,3],[2,4]] */


// Array#transpose
Array.prototype.transpose = function () {
  let newArr = this;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = newArr[i][j];
      newArr[i][j] = newArr[j][i];
      newArr[j][i] = temp;
    }
  }
  return newArr;
};

console.log([[1, 3, 4], [2, 4, 5], [6, 7, 8]].transpose()); /* [1, 2, 6][3, 4, 7][4, 5, 8] */