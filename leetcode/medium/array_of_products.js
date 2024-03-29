// O(n) time | O(n) space
function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
	
	let leftRunningProduct = 1;
	for (let i = 0; i < array.length; i++) {
		products[i] = leftRunningProduct;
		leftRunningProduct *= array[i];
	}
	
	let rightRunningProduct = 1;
	for (let i = array.length - 1; i > -1; i--) {
		products[i] *= rightRunningProduct;
		rightRunningProduct *= array[i];
	}
	
	return products;
}

// original brute force
function arrayOfProducts(array) {
	let products = new Array(array.length).fill(0)
  for (let i = 0; i < array.length; i++) {
		let leftArr = array.slice(0, i);
		let rightArr = array.slice(i + 1);
		let otherEles = leftArr.concat(rightArr);
		products[i] = multiplyReplace(otherEles);
	}
	return products;
}

function multiplyReplace(arr) {
	return arr.reduce((acc, el) => acc * el);
}

// Brute force coding challenge
// function arrayOfProducts(array) {
// 	Const products = [];
	
// 	For (let i = 0; i < array.length; i++) {  // array[i] = 2
// 		Let total = 1;
// 		For (let j = 0; j < array.length; j++) { // array[j] = 4
// 			If (j === i) continue;
// 			Total *= array[j]; // total = 12
// 		}
// 		products.push(total);
// 	}
// 	Return products; // [24, 12]
// }