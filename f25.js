// RENAME CONST VARIABLE WITH ARRAY AND OBJECT METHOD

const user = [30, 50, 70, 80];
const user1 = {
    name: [ 'pintu' ,'tussy' ,'chickoo', 'akki', 'sandy'],
    age : [37, 38, 35, 40, 38]
}

// 1st Method

user[1] = 96;  // 1st way assign a value in CONST varaible in an ARRAY
console.log(user);

// 2nd Method

user1.age[0]= 100;
user1.name [2]= 'amit'; // 2nd way to assign value in CONST variable i an {} OBJECT
console.log(user1);


