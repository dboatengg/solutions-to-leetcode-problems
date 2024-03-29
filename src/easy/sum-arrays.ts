//==============================================instructions
//Write a function that takes an array of numbers and returns the sum of the numbers.
//The numbers can be negative or non - integer.
//If the array does not contain any numbers then you should return 0.

//=============================================my solution
function sum(numbers: number[]): number {
  'use strict';
  return numbers.length > 0 ? numbers.reduce((a, b) => a + b) : 0;
}
console.log(sum([1, 5.2, 4, 0, -1])); //9.2
