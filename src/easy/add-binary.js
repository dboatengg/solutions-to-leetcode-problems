//Implement a function that adds two numbers together and returns their sum in binary.
//The conversion can be done before, or after the addition.
//The binary number returned should be a string.
//Examples:(Input1, Input2 --> Output (explanation)))

//==========================================Solution
function addBinary(a, b) {
  let sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(4, 2)); //output: 110
console.log(addBinary(5, 9)); //output: 1110

//---------------------->>Explanation<<-------------------
// The toString() method in JavaScript converts any value a string.
// It accepts an optional parameter called radix.
//radix: specifies the base for representing numerical values.
//If no radix is specified, the default is 10(decimal).
