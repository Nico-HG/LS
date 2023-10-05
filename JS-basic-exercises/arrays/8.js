let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

function filter(input) {
  return Array.isArray(input);
}

console.log(filter(someValue1));
console.log(filter(someValue2));

