let string = 'axbxcdxex';

//method 1
let thirdOccurrence = (string, element) => {
  let xcount = 0;
  let index = 0
  for (let x of string) {
    if (xcount === 3) {
      return index - 1;
    }
    if (element === x) {
      xcount +=1
    }
    index += 1
  }
  return null;
}

console.log(thirdOccurrence(string, 'x'));

//method 2
let thirdOccurrence2 = (string, element) => {
  let elementCount = 0;
  for (let i = 0; i<= string.length; i += 1) {
    if (elementCount === 3) return i - 1;
    if (string[i] === element) elementCount += 1;
  }
  return null
}
console.log(thirdOccurrence2(string, 'x'));
