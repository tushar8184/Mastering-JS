// TYPES of OPERATOR
// - data types(primitive data types)
// - string "pintu"
// - number 2,4,5,6
// - booleans
// - undefined
// - null
// - BigInt
// - Symbol

let age = 37;
let firstName = 'pinutpatel';
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof 'pintupatel');
console.log(typeof 37);
console.log(age);

// convert number into string----- Number
console.log(age + '');
console.log(typeof age);
console.log(typeof age + '');
console.log(typeof (age + ''));
age = age + "";
console.log(typeof age);

// convert string into number---- String
let newStr = '37'
console.log(typeof newStr);

let newstring = +'37'
console.log(typeof newstring);

// other way

let newAge = 37
newAge = String(newAge)
console.log(typeof newAge);

let newAged = '37'
newAge = Number(newAge)
console.log(typeof newAge);





