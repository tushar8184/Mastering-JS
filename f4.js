// undefined 
// null

let firstName;
console.log(firstName, typeof firstName);
firstName = 'pintu';
console.log(firstName, typeof firstName);

// null
let firstName1 = null;
console.log(firstName1);
console.log(typeof firstName1);
// type of is object ---->> this is a bug or error in Javasvcript 
// and the authors has not fix it b,coz there are several codes have been
//already written in past on the basis of this typeof --->> object
// if they fix it the codes that has written in past has also
// has to changed and that is not possible 

// BigInt

let variable = BigInt(122);
let variable1 = 122n
console.log(Number.MAX_SAFE_INTEGER);
console.log(variable);
console.log(variable1);
console.log(variable + variable1);

