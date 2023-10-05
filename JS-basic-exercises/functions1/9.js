
function extractLanguage(code) {
  return code[0] + code[1];
}
//LaunchSchool solution
// splits string into two arrays and returns the first array.
function extractLanguage(locale) {
  return locale.split('_')[0];
}



console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'