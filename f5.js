// booleans and comparison opearator

let num1 = 6;
let num2 = 8;
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);



// == vs ===
// == checks only value of the variable ,whether u write 
// value in string or number it dosen't matter
// it does'nt checks the typeof data also
// if the value remains the same then only its output is true 
// in below example the value is same it doesn't matter
// whwther it is written in string or number its output is true
let numb1 = '7';
let numb2 = '7';
console.log(numb1==numb2);

// in bleow example the value is different so the output
// is false 
let number1 = 8;
let number2 = 7;
console.log(number1==number2);

// === checks the value(should be same) and the typeof 
// data or data type also
console.log(numb1===numb2);
console.log(number1===number2);

// != vs !==

// != it checks the value only it gives the right 
// answer false and wrong answer true
console.log(numb1 != numb2);
console.log(numb1 !== numb2);

// !== it checks the value and the datatype also
// and the also gives the same output as !=
console.log(number1 != number2);
console.log(number1 !== number2);