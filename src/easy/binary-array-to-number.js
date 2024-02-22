//========================================================instructions
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//========================================================scribbling
// const numbers = [0, 0, 0, 1];
// let n = parseInt(numbers.join(''));
// console.log(n.toString(10));

//========================================================my solution
const binaryArrayToNumber = (arr) => {
  const n = arr.join('');
  return parseInt(n, 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); //1
console.log(binaryArrayToNumber([0, 0, 1, 0])); //2
console.log(binaryArrayToNumber([0, 1, 0, 1])); //5
