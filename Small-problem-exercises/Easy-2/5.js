/* Problem input = two positive integers, expected output = a plethora of operations on the two inputs.

algorithm; ask for user input and initialise it to a variable new variable. Do this twice for two variables
perform the operations on th two variable and save them respectiveley to new bariable. 
log and print the information to th console as described.
*/
let rlSync = require('readline-sync');

let number1 = rlSync.question('==> Enter the first number:\n');
let number2 = rlSync.question('==> Enter the second number:\n');

let addition = +number1 + +number2;
let subtraction = number1 - number2;
let multplication = number1 * number2
let division = Math.floor(number1 / number2);
let remainder = number1 % number2;
let power = number1 ** number2
function displayOperation(operation, result){
  console.log(`==> ${number1} ${operation} ${number2} = ${result}`)
}
displayOperation('+', addition);
displayOperation('-', subtraction);
displayOperation('*', multplication);
displayOperation('/', division);
displayOperation('%', remainder);
displayOperation('**', power);




