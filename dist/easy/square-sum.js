"use strict";
//==================================Instruction
// Complete the square sum function so that...
//it squares each number passed into it and then sums the results together.
//==================================Previous Code
// function squareSum(numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     let squaredNumber = number * number;
//     sum += squaredNumber;
//   }
//   return sum;
// }
//==================================Optimized code
function squareSum(numbers) {
    return numbers.reduce((sum, number) => sum + number * number, 0);
}
//===================================Explanation of optimized code
//We use the reduce method on parameter (which is an array).
//Inside reduce, we provide a callback function that takes two parameters:
//  - accumulator
//  - currentValue.
//The accumulator starts with an initial value of 0 (specified as the second argument of reduce).
//For each element in the array, the callback function adds the current element to the accumulator.
//After processing all elements, reduce returns the final value of the accumulator.
//The accumulator is the sum of all squared numbers in the array.
//===================================Function call
console.log(squareSum([1, 2, 3, 4])); //30
