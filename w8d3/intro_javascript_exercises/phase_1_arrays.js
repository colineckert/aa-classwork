// Array#uniq
Array.prototype.uniq = function() {
  let newArr = [];

  this.forEach(el => {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  })
  return newArr;
}

console.log([1, 2, 2, 3, 3, 3].uniq())

// Array#twoSum




// Array#transpose