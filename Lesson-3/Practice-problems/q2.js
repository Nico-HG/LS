let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?";

let endWithChar = (string, char) => string[string.length - 1] === '!';

console.log(endWithChar(str1, '!'));
console.log(endWithChar(str2, '!'));

let endsWithExclamation = string => endWithChar(string, '!');


