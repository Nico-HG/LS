function triangle(size) {
  let string = ' '.repeat(size);
  
  for (let i = size; i > 0; i-= 1) {
    string = string.replace(' ', '').concat('*');
    console.log(string);
  }
}

triangle(-10);
