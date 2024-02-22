//=================================================Instructions
// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.

//=================================================Previous code
// function repeatStr(n, s) {
//   let strCount = '';
//   for (let i = 1; i <= n; i++) {
//     strCount += s;
//   }
//   return strCount;
// }
// console.log(repeatStr(3, 'hello')); //hellohellohello

//=================================================Optimized code
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, 'hello')); //hellohellohello
