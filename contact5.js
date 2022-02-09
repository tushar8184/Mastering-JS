// createElement method

// document.createElement("h2");

let user = document.createElement("h3"); // create a new "tag" 
// console.log(user);

let user1 = document.createTextNode("Hi this is pintu patel");  // create a new "text"
// console.log(user1);

user.appendChild(user1);  // making the whole Element i.e " <h3>Hi this is pintu patel</h3>"

let a = document.createElement("h3"); // create a new "tag" 
// console.log(user);

let b = document.createTextNode("Hi this is chickoo patel");  // create a new "text"
// console.log(user1);

a.appendChild(b)

document.getElementsByClassName("section-three__part-four-para")[0].appendChild(user)   // please comment this 13 line to see effect in "section-three__part-four-para"
// document.querySelectorAll(".section-three__part-two")[0].appendChild(user)
// console.log(user1);
// console.log(user);

let user4 = document.querySelector(".section-three__part-two").childNodes;
console.log(user4);

let user3 = document.querySelectorAll(".section-three__part-two")[0];
console.log(user3);

user3.insertBefore(user,user3.childNodes[4])  


let user5 = document.querySelector(".section-three__part-four-para").childNodes;
console.log(user5);

let user6 = document.querySelectorAll(".section-three__part-four-para")[0];
console.log(user6);

user6.insertBefore(a,user6.childNodes[3]);



