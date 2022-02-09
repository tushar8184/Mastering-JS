// OBJECT in PROEPRTY 'firstName' is known as Property

let user = {             // { } <<--- are known as object
    firstName: 'Pintu',   // firstName & lastName are known as properties of USER variable
    lastName: 'Patel',
    age: 37,
    movies: ['fida', 'dhoom', 'fiza'],
    salary: function () {
        return 25000;
    },                       // and 'Salary' & 'fullName' are called as methods 
    fullName: function () {
        return user.firstName + ' ' + user.lastName
    },

    place: {
        city: 'Surat',
        state: 'Gujarat',
        country: ' India'
    }

}

console.log(user);
console.log(user.movies[2]);
console.log(user.salary());
console.log(user.fullName());
console.log(user.place.city);


// OBJECT 2nd METHOD

let user1 = new Object();

user1.firstName = 'pintu'
user1.lastName = 'patel'
user1.city = 'surat'

console.log(user1);
console.log(user1.city);


// OBJECTS in ARRAYS METHOD

let user2 = [
    
        {student: 'pintu', age: 37},
        {student: 'tushar', age: 38},
        {student: 'akki', age : 40}

];

for(a = 0; a<3; a++ ){
    console.log(user2[a].student, user2[a].age);
}

// console.log(user2);