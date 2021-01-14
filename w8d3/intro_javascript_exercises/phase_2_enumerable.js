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
Array.prototype.myReduce = function(callback, num = 0) {
  this.myEach((el) => num = callback(num,el));
  return num;
}
// console.log([1,2,3].myReduce((acc, el) => acc + el));