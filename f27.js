// MAP METHOD 

let user = [10,20,30,50];

let user1 = user.map(pintu);

function pintu(a) {
    return a * 2;
}

console.log(user1);

let user2 = [
    {
        name: ['pintu' ,'tussy' ,'chickoo', 'akki', 'sandy'],
        age : [37, 38, 35, 52, 40]
    }
];

let user3 = user2.map(tussy);

function tussy(b) {
    return b.age;
}

console.log(user3);


let user4 = [
    
        {name: 'pintu' , age : 37},
        {name: 'amit' , age : 36},
        {name: 'sandy' , age : 38},
        {name: 'akki' , age : 40}
    
    
];

let user5 = user4.map(tushy);

function tushy(c) {
    return c.name 
}

console.log(user5);