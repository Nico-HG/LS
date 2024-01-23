const rlSync = require('readline-sync');

const ConversionRate = 10.7639; 
let length = rlSync.prompt('Please enter room length');
let width = rlSync.prompt('Please enter room width');

console.log(`The area of the room is ${length * width} square meters (${(length * width) * ConversionRate})`);