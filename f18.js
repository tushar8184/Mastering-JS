// For loop
// in for loop all 3 stages are declared in 1 line
// Initialisation , condition & increement or decreement

//  for( let a = 1; a <= 10; a++)

for (let a = 1; a<= 10; a++) {
   console.log(`${a} hello this is pintu patel`);
//    console.log(a + ' hello this is tushar patel');
}



// Continue & Break 

for (let b = 1; b<= 10; b++) {
    if (b === 3) {
        console.log(`${b} hello this is tussy chickoo patel`);
        continue;
    }
    console.log(`${b} hello this is pintu patel`);
 //    console.log(a + ' hello this is tushar patel');
 }
 
for (let b = 1; b<= 10; b++) {
    if (b === 2) {
        console.log(`${b} hello this is tussy chickoo patel`);
        break
    }
    console.log(`${b} hello this is tushar patel pintu`);
 //    console.log(a + ' hello this is tushar patel');
 }
 