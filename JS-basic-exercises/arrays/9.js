let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  let contains = (string, array) => {
    for (let x of array) {
      if (x === string) {
        return true ;
      }  
    }
    return false;
  }

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false