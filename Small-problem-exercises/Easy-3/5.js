/* input = the onput will be a number - the max length of stars for triangle
output = it will log to the console a triangle of stars ending with the max length at the bottom
Data structure = we are not using an object or array here.
Algorithm
initialise string to the max lngth filled with empty spaces;
count down from the length
for every time you count down replace the end empty string with a star and log it to the console
*/




function triangle(length) {
  let output = [];
  while (length >= 1) {
    output.push(' ');
    length -= 1;
  }
  console.log(output.join(''))

  // for (let i = length; i > 1; i -= 1) {
  //   output += '*';
  //   console.log(output);
  // }
}


triangle(5);