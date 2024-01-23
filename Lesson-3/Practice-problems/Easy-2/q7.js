let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let newObj = Object.entries(flintstones);

let objk = newObj[2];

console.log(objk);

let LS = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

console.log(LS);