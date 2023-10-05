let isBlank = str => {
  if (typeof str === 'string' && str.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(' '));