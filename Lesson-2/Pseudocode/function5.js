let array1 = [1, 2, 3];
let array2 = [4, 5, 6];


/// Reduce method that i still need to figure out.
// function merge(ar1, ar2) {
//   let newArray = [];
//   ar2.reduce((accumulator, current) => accumulator.push(ar1.shift());accumulator.push(current), )
// }

let newArray = [];
while( array2.length > 0){
  newArray.push(array1.shift());
  newArray.push(array2.shift());
}

console.log(newArray);
