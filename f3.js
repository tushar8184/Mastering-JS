// string concatination

let string1 = '37';
let string2 = '38';

let newStringd = string1 +'   '+ string2;
console.log(newStringd);


let newString = Number(string1) + Number(string2);
console.log(newString);
console.log(typeof newString);


// templete string

let age = 37;
let firstName = 'pintu';

// my name is pintu and my age is 37------>>> to print this
// we have to use backticks 

let aboutMe = `my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);