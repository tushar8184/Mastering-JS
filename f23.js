// Differnt types of ARRAYS METHODS
/* - SORT()
- reverse()
- pop()
- push()
- shift()
- unshift()
- concat()
- join()
- slice()
- splice()
- isArray()
- indexOf()
- lastIndexOf()
- entries()
- every()
- filter()
- find()
- findIndex()
- includes()
- some()
- forEach()
- toString()
- valueOf()
- fill() */



// SORT METHOD & REVERSE METHOD

let hero = ['pintu', 'chickoo', 'tussy', 'sandy']


hero.sort();  // sort the Array in Alphabatic Order
hero.reverse() // arrange the Array in reverse order
console.log(hero);


// PUSH & POP METHOD 
let sam = ['pintu', 'chickoo', 'tussy', 'sandy']

sam.pop(); // remove the last value in an Array
console.log(sam);

let san = ['pintu', 'chickoo', 'tussy', 'sandy'];

san.push('akki') // add the last value in an Array 
console.log(san);

// SHIFT & UNSHIFT METHOD

san.shift(); // remove the first value in an Array
console.log(san);

san.unshift('AKHILESH SHARMA') // add the new first value in an Array
console.log(san);


// CONCAT & JOIN METHOD

let pin = ['pintu', 'chickoo', 'tussy', 'sandy'];
let tus = ['akki', 'amit', 'nrupesh', 'shubham'];
let har = ['darsh', 'trups']

let tu = tus.concat(pin,har); // adding the 'tus' & 'har' in an arrays
console.log(tu);

let chi = tu.join( ' ' ) // make the one string and remove the comma also
console.log(chi);        // and also add any key say / - _ = by adding in between ' ' colon
                     

// SLICE AND SPLICE METHOD

let koo = ['pintu', 'chickoo', 'tussy', 'sandy', 'swapnil', 'shubham'];

let cool = koo.slice(1,4); // it delete the value of an array by counting in index number
console.log(cool);  // (1,4) 1 means index 1 se pehle ki value delete hogi or 4 means 3th index ke baad ki sari value slice(delete) hogi

koo.splice(1,2, 'darsh', 'neha', 'chetna')
console.log(koo); // 1 means 1st index ki value delete hogi uski jagah assigned value he wo place hogi or 3 means 3rd index k baad ki value print hogi

// koo.splice(1,1)
// console.log(koo);


// INDEX OF & LAST INDEX OF METHOD

let kool = ['chickoo','pintu', 'tussy', 'sandy', 'chickoo', 'swapnil', 'shubham'];

let poosh =kool.indexOf('tussy'); // it search from start index 
let push =kool.lastIndexOf('chickoo'); // it search 'chickoo' from last index i.e from reverse
console.log(poosh);
console.log(push);



// SOME & EVERY METHOD OF ARRAYS 

let pool = [25,23,30,27]

function check(poo) {
    return poo >=20;
}

let c = pool.some(check); // any one value should be greater than 2o the output we get is true otherwise 'false'
let e = pool.every(check) // every value in an array should be graeter than 20 the output we get is 'true'
console.log(c);
console.log(e);


// FIND & FIND INDEX METHOD OF ARRAYS

let tool = [25,23,30,27]

function check(poo) {
    return poo >=26;  
}

let f = tool.find(check);// it checks the first of its match value and return the output
let g =tool.findIndex(check) // it checks the index of its first matching condition & return the output
console.log(f);
console.log(g);


// ARRAY FILTER METHOD

let bool = [60,40,20,30,15]

function check(poo) {
    return poo >= 25;  
}
 
let h = bool.filter(check); // it only throws the value from the array which is which is greater than 26
console.log(h);             // " return poo >= 26"


// TO STRING & FILL METHOD

let dool = [60,40,20,30,15]

 
let i = dool.toString(); // it convert the full ARRAYS value into STRING
console.log(i); 

let j = dool.fill(10) // it fill the declare value in an full ARRAY
console.log(j);


// FOR EACH LOOP or ARRAY METHOD

let k = ['chickoo','pintu', 'tussy', 'sandy', 'chickoo', 'swapnil', 'shubham'];

k.forEach(pintu)

function pintu(karan ,tyagi) {
    console.log(tyagi, karan);
}

// let k = nool.forEach(pintu);
// console.log(k);





