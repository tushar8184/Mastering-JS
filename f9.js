// nested if else

// "prompt" functions only take string input value " "

let luckyNumber  = 37;
let userGuess = +prompt('guess a number');

console.log(typeof userGuess, userGuess);

// if u are dealing with integer then u have '+' sign before 
// 'prompt' function
// let userGuess1 = prompt("what is your lucky number");

// console.log(typeof userGuess1, userGuess1);

// to throw the input value in integer we should have to 
// make the function in integer by adding + sign before 
// prompt function

// if(userGuess === luckyNumber){
//     console.log('your guess is right!!');
// }else{
//     console.log('your guess is wrong!!');
// }

if(userGuess === luckyNumber){
    console.log('your guess is right!!');
}else{
    if (userGuess < luckyNumber) {
        console.log('too low');
    }else{
        console.log('too high');
    }
}