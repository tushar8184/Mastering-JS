// Arrays

let pintu = [10, 20, 30, 40, 50, 60];
let tussy = 0;

for (a = 0; a <= 5; a++) {
    console.log(pintu[a]);
    tussy = tussy + (pintu[a]);
}
console.log(`total ${tussy}`);



// let hero = [ 10, 'pintu', 'tussy', 20 ,10, 'tushar'];
let hero = new Array(0, 'chickoo', 2, 'patel');
hero[0] = 'pintu';  // <--- are the diff method to assigned in Arary
hero[2] = 'tussy';
hero[4] = 37;
for (a = 0; a <= 4; a++) {
    console.log(hero[a]);
}


// DIFFERENT METHODS

let value = new Array();
for (b = 1; b <= 3; b++) {
    value[b] = prompt('Enter the value ');
}


for (a = 1; a <= 3; a++) 
        console.log(value[a]);
