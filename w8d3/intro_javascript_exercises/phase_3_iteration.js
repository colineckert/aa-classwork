// Array#bubbleSort
Array.prototype.bubbleSort = function() {
  let sorted = false;
  
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let a = this[i], b = this[i + 1];
        this[i + 1] = a;
        this[i] = b;
        sorted = false;
      }
    }
  }
  return this;
};

// console.log([2, 4, 1, 5].bubbleSort())


// String#substrings
String.prototype.substrings = function() {
  let newArr = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i+1; j < this.length - 1; j++) {
      let substring = this.slice(i, j);
      newArr.push(substring);
    }
  }
  return newArr;
};

// console.log("speaker".substrings());