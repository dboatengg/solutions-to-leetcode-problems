//=============================================Instructions
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//=============================================Code
function reverseString(str) {
  const stringArray = str.split('');
  const revereStringArray = stringArray.reverse();
  const combinedString = revereStringArray.join('');
  return combinedString;
}

//=============================================Code Explanation

//=============================================Function call
console.log(reverseString('colour'));
