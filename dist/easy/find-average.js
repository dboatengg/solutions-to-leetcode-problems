"use strict";
//============================================Instructions
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.
//============================================First Solution
// function findAverage(array) {
//   if (array.length >= 1) {
//     let sum = array.reduce((a, b) => a + b);
//     let avg = sum / array.length;
//     return avg;
//   }
//   return 0;
// }
//============================================Optimized Solution
function findAverage(array) {
    return array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
}
console.log(findAverage([2, 2, 2]));
console.log(findAverage([]));
console.log(findAverage([2]));
