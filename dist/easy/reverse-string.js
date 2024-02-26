"use strict";
//=============================================Instructions
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//=============================================Previous Code
// function reverseString(str) {
//   const stringArray = str.split('');
//   const revereStringArray = stringArray.reverse();
//   const combinedString = revereStringArray.join('');
//   return combinedString;
// }
//============================================= Optimized Code
function reverseString(str) {
    return str.split('').reverse().join('');
}
//=============================================Code Explanation
//The approach implemented in the optimized code is called `method chaining`.
//The 'split' method divides the string into an array of characters.
//The 'reverse' method reverses the order of items in the array.
//Lastly, the 'join' method joins array of string characters back into a single string.
//=============================================Function call
console.log(reverseString('colour'));
console.log(reverseString('dcba'));
