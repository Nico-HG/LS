let repeat = (amount, str) => {
  let newString = '';
  while (amount > 0) {
    newString += str;
    amount -= 1;
  }
  return newString;

}



console.log(repeat(3, 'ha')); // 'hahaha'