/* Problem : input = an array with two or more elements and then an object
with two keys "titles" and "occupation".
Expected return is string greting involving the array elements and object values.
Examples : example has 3 elements in array.
Data Structure: Not using an array or object st store anything.
Algorithm: 
return a string with the greeting and the array elements joined together and object values.

*/


let greetings = (array, object) => `Hello, ${array.join(' ')}! Nice to have a ${object['title']} ${object['occupation']} around.`;

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);