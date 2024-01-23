/* Problem input: gets user data -> string for name with punction mark or not.
 output = two conditional outputs based on user input. On output invloves mutated user input the other is the the same.
examples: none
Data structures: no arrays or objects involved.
algorithm: 
ask for user name by logging to console
initialise name to variable.
check if the string assigned to the variable ends with '1'
If yes then return second output with variable mutated as caps.
If no then return first output hello + name
*/
let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? \n');

console.log(name[name.length - 1] === '!' ? 
`HELLO ${name.replace('!', '').toUpperCase()}. WHY ARE WE SCREAMING?`: 
`Hello ${name.replace('!', '')}.`);