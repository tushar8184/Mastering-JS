// Multidimensional Arrays

let hero = [
    ['pintu', 37, 'male', 'B.com'],
    ['Tussy', 38, 'male', 'BCA'],
    ['Chetna', 30, 'female', 'B.A'],
    ['Akki', 40, 'male', 'BBA']
];

for (let a = 0; a < 4; a++) {
    // for (let b = 0; b < 4; b++) 
        console.log(hero[a]);
    
}
console.log(hero);

let sam = [
    ['pintu', 37, 'male', 'B.com'],
    ['Tussy', 38, 'male', 'BCA'],
    ['Chetna', 30, 'female', 'B.A'],
    ['Akki', 40, 'male', 'BBA']
];

sam[0][0] = 'patelpintutushar'; // to change the value in Arrays

console.log(sam);

delete sam[2][0]  // to delete the value of Arrays

// console.log(sam);