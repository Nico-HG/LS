function oddities(array) {
  let index = 0;
  let newArray = []
  array.forEach(element => {
    if (index % 2 === 0) {
      newArray.push(element)
    }
    index += 1;
  });
  return newArray;
}

function oddities2(array) {
  let newArray = []
  for (let index = 0; index < array.length; index +=1) {
    if (index % 2 === 0 ) {
      newArray.push(array[index])
    }
  } return newArray;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
