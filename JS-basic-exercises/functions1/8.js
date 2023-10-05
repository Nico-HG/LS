function greet(code){
  switch(code){
    case 'en':
      return 'Hi!';
    case 'fr':
      return 'Salut!';
    case 'pt':
      return 'Olá!';
    case 'de':
      return 'Hallo!';
  }
}






console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
