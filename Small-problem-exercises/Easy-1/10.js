function utf16Value(input) {
  let sum = 0;
  for (let i = 0; i <= input.length - 1; i += 1) {
    sum += input[i].charCodeAt();
  } return sum;
}

console.log(utf16Value('Ω'));