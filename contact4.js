//  Traversal Methods

// 1- parentElement 

let user1 = document.querySelector("html").parentElement; // if the "parentElement" does not have any parent then its value as "NULL"
console.log(user1); // it reflects the parent element of the given section or HTML document 
// here the parent element of the (".navbar__container") is "navbar" & it reflect in console section

document.querySelector(".section-three__part-four-body").parentElement.addEventListener('click', function () {
     this.style.transition ="1s", this.classList.toggle('ladoo') // by using this method we can assigned a new class name by which we can change the background color of the element
})


// 2- parentNode

var user2 = document.querySelector(".section-two__container").parentNode; // In "parentNode" if the elements does not have any "Parent" it returns something 
console.log(user2); // or say value say HTML does have parent name "document" so it return it  


// 3- children 

var user2 = document.querySelector(".section-two__container").children; // if u want to target specfic child u can use this method name "children"
console.log(user2);  // by declaring them in [] square bracis &   it returns only tagname

var user2 = document.querySelector(".section-two__part-one").children[1]; // if u want to target specfic child u can use this method name "children"
console.log(user2);  // by declaring them in [] square bracis &   it returns only tagname


document.querySelector(".section-three__part-four-body").children[1].addEventListener('click', function () {
    this.style.transition ="0.5s", this.classList.toggle('nandu'), this.style.borderRadius = "10px" // by using this method u can target the specific child element & can style anything 
})

// 4- childNodes

var user2 = document.querySelector(".section-two__container").childNodes; // "childNodes" targets all th nodes i.e 'space', 'text', 'tagname' etc 
console.log(user2);

var user2 = document.querySelector(".section-two__part-one").childNodes; // "childNodes" targets all th nodes i.e 'space', 'text', 'tagname' etc 
console.log(user2);




document.querySelector(".section-two__part-one").childNodes[1].addEventListener('click', function () {
    this.style.transition ="0.5s", this.classList.toggle('ladoo'), this.style.borderRadius = "5px" 
})

document.querySelector(".section-two__part-one").childNodes[3].addEventListener('click', function () {
    this.style.transition ="0.5s", this.classList.toggle('nandu'), this.style.borderRadius = "5px" 
})

document.querySelector(".section-two__part-one").children[1].addEventListener('click', function () {
    this.style.transition ="0.5s", this.classList.toggle('shyam'), this.style.borderRadius = "5px" 
})


