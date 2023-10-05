let text = 'launch school tech & talk';
let array = text.split(' ');
let textCapitalised = ''; 

array.forEach(element => { 
  let newElement = element.replace(element[0], element[0].toUpperCase())
  textCapitalised += newElement + ' ';
})

console.log(textCapitalised);