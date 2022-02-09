// FOR IN LOOP METHOD 

let user = {
    firstName :'pintu',
    lastName : 'patel',
    age : 37
}

for (let key in user) {
    console.log(key + ': ' + user[key]);
  
}

for (let key in user) {
    console.log(user[key]);
  
}