
rlSync = require('readline-sync');

//ask the user for the first number
//ask the user for the second number
//ask the user for an operation to perform
//peform the operation on the two numbers
//print the result to the terminal

console.log('Welcome to Calculator');

console.log('What\'s the first number?');
let number1 = Number(rlSync.question());

console.log('What\s the second number?');
let number2 = Number(rlSync.question());

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = rlSync.question();

let output;
if (operation === '1') {
  output = number1 + number2;
} else if (operation === '2') {
  output = number1 - number2;
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}


console.log(`The result is: ${output}`);

