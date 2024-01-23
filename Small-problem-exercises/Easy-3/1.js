let crunch = string => {
  let newString = '';
  for (let element of string) {
    if (newString[newString.length - 1] !== element) {
      newString += element;
    }
  } return newString;
}

console.log(crunch(''));