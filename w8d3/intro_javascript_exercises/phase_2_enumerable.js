// Array#myEach(callback)
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const multiply = function(num) {
  return num * 2;
}
// console.log([1, 2, 3].myEach(multiply)) 


// Array#myMap(callback)
Array.prototype.myMap = function (callback) {
  let newArr = [];
  
  this.myEach( (el) => {
    newArr.push(callback(el));
  })

  return newArr;
};
// console.log([1, 2, 3].myMap(multiply)) 


// Array#myReduce(callback[, initialValue])
Array.prototype.myReduce = function(callback, initialValue) {
  let arr = this;

  if (initialValue === undefined) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }
  
  let result = initialValue;
  arr.myEach(el => result = callback(result, el));
  return result;
}
// console.log([1,2,3].myReduce((acc, el) => acc + el));