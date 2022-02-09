// and & or operator

let firstName = 'pintu';
let age = 37;

if(firstName[1] === 'i'){
    console.log('your name start with p');
}

if(age > 30){
    console.log('your age is above 30');
}

// if this above condition is to checked at the same time
// then the ternary operator is good tool to used

// --- &&-- is known as AND operator
// if "&&" both side condition remains true then only it gives 
// correct answer, if not it not gives the wrong answer

if(firstName[1] === 'i' && age >= 31){
    console.log('Name starts with p & above 37');
}else{
    console.log('name starts with u');
}

// --- ||-- is known as OR operator
// if "||" any one side of the condition remains correcct 
// then it throws the correct answer

if(firstName[2] === 'i' || age >= 40){
    console.log('Name starts with p & above 37');
}else{
    console.log('name starts with u');
}

let a = 30;
let b = 15;
if (!(a >= 12)) {
    console.log('yes u r eligible');
}else{
    console.log('no u r not eligible');
}