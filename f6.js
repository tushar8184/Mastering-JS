// if and else condition

let age = 37;
if(age<38){
    console.log('user can play contra');
}else{
    console.log('user can play mario');
}

if(age > 38){
    console.log('user can play contra');
}else{
    console.log('user can play mario');
}

if(age >= 38){
    console.log('user can play contra');
}else{
    console.log('user can play mario');
}

if(age <= 38){
    console.log('user can play contra');
}else{
    console.log('user can play mario');
}

// --------------------- 

let num = 14;
if(num/2===7){
    console.log('even');
}else{
    console.log('odd');
}

if(num/2===8){
    console.log('even');
}else{
    console.log('odd');
}


// truthy and falsely values

// falsy values --->> in it if we declare nothing in string 
// the value we received is ELSE condition,below are the 
// falsy values
// "", ''
// null
// undefined
// 0 
let firstName = ''

if(firstName){
    console.log(firstName);
}else{
    console.log('its an empty cell');
}

// truthy values ---->> in it if we declare any values inside 
// string the value wew received is IF condition
// truthy values are as belows
// "pintu"
// -1, 1,2,3

let firstName1 = "pintu";

if(firstName1){
    console.log(firstName1);
}else{
    console.log('its an empty cell');
}