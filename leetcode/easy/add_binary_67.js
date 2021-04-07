var addBinary = function(a, b) {
  let binaryA = BigInt("0b" + a);
  let binaryB = BigInt("0b" + b);
  let sum;
  let carry;
  while (binaryB || carry === undefined) {
    sum = binaryA ^ binaryB;
    carry = (binaryA & binaryB) << BigInt("0b1");
    binaryA = sum
    binaryB = carry
  }
  return sum.toString(2);
};