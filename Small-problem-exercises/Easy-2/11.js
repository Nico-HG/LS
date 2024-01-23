function centerOf(string) {
  return string.length % 2 === 0
  ? string[(string.length/2) - 1] + string[(string.length/2)]
  : string[Math.floor(string.length/2)]
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));           