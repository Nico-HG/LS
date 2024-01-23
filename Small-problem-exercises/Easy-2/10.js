let rlSync = require('readline-sync');

let date = new Date;
let age = rlSync.question('What is your age?');
let retireAge = rlSync.question('What age would you like to retire?');
let yearsLeft = retireAge - age;


console.log(`It's ${date.getFullYear()}. You will retire in ${date.getFullYear() + yearsLeft}.
You have only ${yearsLeft} years of work to go!`);