//==============================================instructions
//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

//==============================================my solution
function basicOp(
  operation: string,
  value1: number,
  value2: number
): number | string {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      if (value2 !== 0) {
        return value1 / value2;
      } else {
        return 'Division by zero is not allowed';
      }
    default:
      return 'Operation is invalid';
  }
}

console.log(basicOp('+', 4, 7)); //11
console.log(basicOp('-', 15, 18)); //-3
console.log(basicOp('*', 5, 5)); //25
console.log(basicOp('/', 5, 5)); //1
console.log(basicOp('=', 5, 5)); //operation is invalid
