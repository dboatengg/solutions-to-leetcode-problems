// Complete the square sum function so that...
//it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    let squaredNumber = number * number;
    sum += squaredNumber;
  }
  return sum;
}

console.log(squareSum([1, 2, 3, 4])); //30
