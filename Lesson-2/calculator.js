//ask the user for the first number
//ask the user for the second number
//ask the user for an operation to perform
//peform the operation on the two numbers
//print the result to the terminal
const rlSync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json'), LANGUAGE = 'English';
let calculatorContinue;

function logText(key, clear, extraData = '') {
  if (clear) console.clear();
  console.log(MESSAGES[LANGUAGE][key] + extraData);
}
function getNumber(promptMessageKey) {
  let num;
  do {
    num = rlSync.question(logText(promptMessageKey, true));
  } while (Object.is(Number(num), NaN) || !(num.trim()));
  return Number(num);
}
function getOperation(promptMessageKey) {
  let inputForOperation;
  do {
    inputForOperation = rlSync.question(logText(promptMessageKey, true));
  } while (inputForOperation !== '1' && inputForOperation !== '2' && inputForOperation !== '3' && inputForOperation !== '4'); 
  return inputForOperation;
}
function calculateAndReturnResult(number1, number2, operation) {
  if (operation === '4' && number2 === 0) return 'Invalid';
  switch (operation) {
    case '1': return (number1 + number2);
    case '2': return (number1 - number2);
    case '3': return (number1 * number2);
    case '4': return (number1 / number2);  
  }
}
function calculatorStart() {
  let number1, number2, operation, result;
  number1 = getNumber("firstNumberInput");
  number2 = getNumber("secondNumberInput");
  operation = getOperation('operationInput');
  result = calculateAndReturnResult(number1, number2, operation);
  do {
    logText('resultLog', true, result);
    calculatorContinue = rlSync.question(logText('askAgain'));
  } while (calculatorContinue !== '1' && calculatorContinue !== '2');
}
do { 
calculatorStart(); 
} while(calculatorContinue === '1');