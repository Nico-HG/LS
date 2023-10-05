//doesn't work figure out why 
let catAge = num => {
   let age;
   age = 0;
  for (let i = num; i > 0; i -= 1) {
    if ( i > 2) {
      age += 4;
    }
    if ( i === 2) {
      age += 9;
    }
    if ( i === 1) {
    }  age += 15;
    
  }
  return age;
}
//works
let catAge2 = num => {
  if (num === 0) return 0;
  if (num === 1) return 15;
  if (num === 2) return 24;
  else return (((num - 2) * 4) + 24)
}








console.log(catAge2(0)); // 0
console.log(catAge2(1)); // 15
console.log(catAge2(2)); // 24
console.log(catAge2(3)); // 28
console.log(catAge2(4)); // 32