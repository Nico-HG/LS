let rlSync = require('readline-sync');

let userNumber = Number(rlSync.question('Please enter an integer greater than 0: '));
let sumOrProduct = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.');

let sum = 0;
let product = 1;

if (sumOrProduct === 's') {
  for(let i = 1; i <= userNumber; i += 1) {
    sum += i;
  } console.log(`The sum of the integers betwee 1 and ${userNumber} is ${sum}`)
} else if (sumOrProduct === 'p') {
  for(let i = 1; i <= userNumber; i += 1) {
    product *= i;
  } console.log(`The product of the integers between 1 and ${userNumber} is ${product}`)

}