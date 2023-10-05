function greet(greeting = 'Hello', greete = 'world') {
  console.log(greeting + ', ' + greete);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!