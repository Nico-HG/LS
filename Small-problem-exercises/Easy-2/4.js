/* problem inputs = one number, outputs = square of that number
examples: square(5) === 25); // logs true
Data structures: no objects or arrays invloved
Algorithm: take the input number and multiply it by itself. return the value.
*/
let multiply = (num1, num2) => num1 * num2;
let square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64);