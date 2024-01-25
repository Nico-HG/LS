let rlSync = require('readline-sync');

function getUserInput(ask) {
  let input = rlSync.question(ask);
  return input
}

let noun = getUserInput('Enter a noun ');
let verb = getUserInput('Enter a verb ');
let adjective = getUserInput('Enter an adjective ');
let adverb = getUserInput('Enter an adverb ');

console.log(`A ${adjective} ${noun} that can ${verb} ${adverb}? Nope, haven't seen one around here!`)