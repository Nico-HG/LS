let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// method 1 (wrong for the spec kinda)
vocabulary.flat().forEach(element => console.log(element));

//method (iterates through the sub arrays)
for (let i = 0; i < 3; i += 1) {
  vocabulary[i].forEach(element => console.log(element));
} 
