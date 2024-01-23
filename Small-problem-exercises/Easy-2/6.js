let penultimate = (stringPhrase) => {
  let words = stringPhrase.split(' ');
  return words[words.length - 2];
}

penultimate("Launch School is great!");