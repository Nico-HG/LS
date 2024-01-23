function logInBox(text) {
  let logCharLengthOfTxt = char => char.repeat(text.length);
  console.log(`+-${logCharLengthOfTxt('-')}-+`);
  console.log(`| ${logCharLengthOfTxt(' ')} |`);
  console.log(`| ${text} |`);
  console.log(`| ${logCharLengthOfTxt(' ')} |`);
  console.log(`+-${logCharLengthOfTxt('-')}-+`);
}
//Theres a further explorartion for this

logInBox('To boldly go where no one has gone before.');