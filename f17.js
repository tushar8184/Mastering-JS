//  Global & Local variable

let user1 = 'pintu'; //<<<------ Global variable 

function tussy() {
    // console.log(user1);
    let user2 = 'chickoo';
    console.log(user2);  // <<<<------ Local variable
    console.log(user1);
}

tussy();
console.log(user1);
console.log(user2);