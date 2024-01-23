function stringy(num) {
  let output = '';
  for (let i = num; i > 0; i -= 1) {
    output += output[output.length - 1] === '1' ?  '0' : '1';
  }
  return output;
}

console.log(stringy(4))