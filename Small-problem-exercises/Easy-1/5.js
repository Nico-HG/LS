let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill?'));
let tipPercentage = rlSync.question('What is the tip percentage?');
let tip = bill * (tipPercentage / 100);

console.log(`The tip is $${tip}\nThe total is $${tip + bill}`);