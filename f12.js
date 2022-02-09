//  While loop

let p = 0;

while (p <= 8) {
    console.log(p);
    p++
}
console.log(`current value if p is ${p}`);

let c = 1;
while (c <= 8) {
    console.log(`${c} hello this is pintu`);
    c++
}




let total = 0


total = total + 1;
total = total + 2;
total = total + 3;
total = total + 4;
total = total + 5;
total = total + 6;
total = total + 7;
total = total + 8;
total = total + 9;
total = total + 10;

console.log(total);

// below are the 2 ways to throw the same outputs

let num = 10;
//  1st way
// let i = 1;
// while (i<=10) {
//     num = num + i;
//     i++
// }

// console.log(num);

// 2nd way ----->>>> is the fastest one
let number = (num*(num + 1))/2; 
console.log(number);


let a = 10;
let b = 10;

// console.log(a+b);
a++;   // a++ means a = a+1 ---->>  11
console.log(a+b);
a--;   // a-- means a= a-1 ----->> 10 b,coz above a value after console is 21 so 21 - 1 = 20;
console.log(a+b);


// Do while Loop

let d = 1;

do {
   console.log(d); 
   d++
} while (d <= 8);

let e = 1;

do {
//    console.log( `${e} hello this is pintu patel`);
   console.log(e +' hello this is tussy patel'); 
   e++
} while (e <= 8);