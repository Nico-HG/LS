let arrayOfInt = [1,4,7,2,5];

let everyOther = array => {
  let newArray = []
  for (let i = 0; i <= array.length; i += 2) {
    newArray.push(array[i]);

  }
  return newArray;
}

console.log(everyOther(arrayOfInt));


let everyOther2 = array => {
  return array.filter( element => (array.indexOf(element)% 2) === 0)
}

console.log(everyOther2(arrayOfInt));