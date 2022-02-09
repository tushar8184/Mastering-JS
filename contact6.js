// InsertAdjacentElement

let a = document.createElement("h3"); // create a new "tag" 

let b = document.createTextNode("Hi this is pintu patel");

let g = document.createTextNode("Hi this is tussy patel");

let f = document.createElement("h4");

let d = document.querySelector(".section-three__part-two").childNodes;
console.log(d);

let c = document.querySelector(".section-three__part-two").children;
console.log(c); 

a.appendChild(b);
f.appendChild(g);

let e = document.querySelector(".section-three__part-two");

e.insertAdjacentElement("beforebegin", f).style.background = "rgb(179, 157, 219)"   // it insert the "Hi this is pintu patel" before ".section-three__part-two" element
e.insertAdjacentElement("beforebegin", f).style.border = "1px solid rgb(244, 67, 54)"   // it insert the "Hi this is pintu patel" before ".section-three__part-two" element
e.insertAdjacentElement("beforebegin", f).style.fontFamily = "DM Sans, sans-serif"   // it insert the "Hi this is pintu patel" before ".section-three__part-two" element
// e.insertAdjacentElement("afterbegin", f)   // it insert the "Hi this is pintu patel" after ".section-three__part-two" element i.e between ".section-three__part-two" name and the "cause" or say tag name(h2)
document.querySelector(".section-three__part-two").appendChild(a).style.border = "1px solid rgb(255, 87, 34)";

document.querySelector(".section-three__part-two").children[3].style.background = "rgb(129, 212, 250)"    // <<---- BLUE
document.querySelector(".section-three__part-two").childNodes[11].style.background = "rgb(255, 238, 88)"  // <<---- YELLOW
document.querySelector(".section-three__part-two").childNodes[9].style.background = "rgb(255, 205, 210)"  // <<---- PINK

console.log(a);


// InsertAdjacentHTML

let h = document.querySelector(".section-three__part-three");

let i = "<h3> this is pintus patel </h3>";

h.insertAdjacentHTML("beforeend", i); // here u dont have apend (f.appendChild(g)) the ELEMENT "h2" tag with TEXTNODE "this is pintus patel "

let j = 'this is tusshy patel';
h.insertAdjacentText("beforeend", j); // here u dont have apend (f.appendChild(g)) the ELEMENT "h2" tag with TEXTNODE "this is pintus patel "


// Replace child method

let k = document.createElement("h3"); // create a new "tag" 

let l = document.createTextNode("PINTUSSSS PATEL");

let m  = document.createAttribute('class')

k.appendChild(l);

// console.log(k);

let user = document.querySelector(".section-three__part-two"); 

let user1 = user.children[3]; 

// user.replaceChild(k,user1);  // replace the existing element "h3" with new "PINTUSSSS PATEL"
user.removeChild(user1);  // remove the existing any "h3" element 





