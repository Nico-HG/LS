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

function extractLanguage(code) {
  return code[0] + code[1];
}

let extractRegion = code => {
  return code.split('_')[1].split('.')[0];
}


let localGreet = code => {
  let languageCode = extractLanguage(code);
  let regionCode = extractRegion(code)

  switch(regionCode) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy!';
    default: return greet(languageCode);
  }
}

console.log(localGreet('en_GB.UTF-8'))

