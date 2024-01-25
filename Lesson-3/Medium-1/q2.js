let munstersDescription = "The Munsters are creepy and spooky.";
let newString = ''

for (let letter of munstersDescription) {
  if (letter === letter.toUpperCase()) {
    newString += letter.toLowerCase();
  } else {
    newString += letter.toUpperCase();
  }
}
console.log(newString);