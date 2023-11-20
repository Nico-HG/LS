const rlSync = require('readline-sync');

//ask the user for the first number
//ask the user for the second number
//ask the user for an operation to perform
//peform the operation on the two numbers
//print the result to the terminal

console.log('Welcome to Calculator');

let number1;
let number2;
let operator;

do {
  number1 = Number(rlSync.question("What is your first number?\n"));
} while ( Object.is(number1, NaN) ) 

do {
  number2 = Number(rlSync.question("What is your second number?\n"));
} while ( Object.is(number2, NaN) ) 

do {
  operator = rlSync.question('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n');
} while (operator !== '1' && operator !== '2' && operator !== '3' && operator !== '4') 

switch (operator) {
  case '1':
    console.log(`The result is: ${number1 + number2}`);
    break;
  case '2':
    console.log(`The result is: ${number1 - number2}`);
    break;
  case '3':
    console.log(`The result is: ${number1 * number2}`);
    break;
  case '4':
    console.log(`The result is: ${number1 / number2}`);  
    break;
}