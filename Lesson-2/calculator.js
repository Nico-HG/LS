//ask the user for the first number
//ask the user for the second number
//ask the user for an operation to perform
//peform the operation on the two numbers
//print the result to the terminal
const rlSync = require('readline-sync');
const messages = require('./calculator_messages.json')
const LANGUAGE = 'English';

let number1;
let number2;
let operator;
let onOff;

function logText(key, extraData = '') {
  console.log(messages[LANGUAGE][key] + extraData);
}

function calculate() {
do {
  number1 = Number(rlSync.question(logText('firstNumberInput')));
} while ( Object.is(number1, NaN) || !number1 ) 

do {
  number2 = Number(rlSync.question(logText('secondNumberInput')));
} while ( Object.is(number2, NaN) || !number2 ) 

do {
  operator = rlSync.question(logText('operatorInput'));
} while (operator !== '1' && operator !== '2' && operator !== '3' && operator !== '4') 

switch (operator) {
  case '1':
    logText('resultLog', (number1 + number2));
    break;
  case '2':
    logText('resultLog', (number1 - number2));
    break;
  case '3':
    logText('resultLog', (number1 * number2));
    break;
  case '4':
    logText('resultLog', (number1 / number2));  
    break;
}

do {
  onOff = rlSync.question(logText('askAgain'));
} while (onOff !== '1' && onOff !== '2');
}

logText('greeting');

do { 
calculate() 
} while(onOff === '1');
