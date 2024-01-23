let advice = "Few things in life are as important as house training your pet dinosaur.";
const regexWord = /important/i;
let newAdvice = advice.replace( regexWord, 'urgent');

console.log(newAdvice);