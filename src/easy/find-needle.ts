//======================================Instructions
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index.

//======================================WRONG SOLUTION
//------------------>>WORTH NOTING<<----------------------
//------------------>>The code didn't work because<<-------------------------------
// In JavaScript, you can't directly return a value from a callback function passed to forEach or similar methods to the outer function.
//If you need to return a value from a loop, you would typically use a for loop instead of forEach.
// function findNeedle(haystack) {
//   haystack.forEach((element, index) => {
//     if (element === 'needle') return `found the needle at position ${index}`;
//   });
// }

//================================================Final Solution
function findNeedle(haystack: string[]): string {
  for (let i = 0; i <= haystack.length; i++) {
    if (haystack[i] === 'needle') return `found the needle at position ${i}`;
  }
  return 'needle not found';
}

let items = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
console.log(findNeedle(items));
