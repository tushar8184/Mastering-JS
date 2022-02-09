// classList methods

// 1st method 
// document.querySelector(".section-three__part-four").addEventListener('click', user);

// function user() {
    // document.querySelector(".section-three__part-four").classList.add("ladoo","gopal")
// }


// 2nd method
// document.querySelectorAll(".section-three__part-three")[0].addEventListener('click', function () {
    // this.classList.add("ladoo"), this.classList.toggle("nandu")// by using this method we can assigned a new class name by which we can change the background color of the element
// })

// document.querySelector(".section-three__part-three").addEventListener('click', function () {
    // this.classList.toggle("ladoo")// by using this method we can assigned a new class name by which we can change the background color of the element
// })
// document.querySelector(".section-three__container").addEventListener('click', function () {
    // this.classList.toggle("nandu"), this.style.transition ="0.8s"  // by using this method we can assigned a new class name by which we can change the background color of the element
// })

//and to see the class names of particular section & the added class name(ladoo) in "CONSOLE" section of an inspect

// let user1 = document.querySelector(".section-two").classList
// console.log(user1);



// Toggle Method
// document.querySelector(".section-three__part-four").addEventListener('click', function () {
    // this.classList.toggle("ladoo"), this.style.transition ="0.5s"  // by using this method we can assigned a new class name by which we can change the background color of the element
// })

document.querySelector(".section-three__part-four").addEventListener('click', function () {
    document.querySelectorAll(".section-three__part-three")[0].classList.toggle("ladoo")
    // document.querySelectorAll(".section-three__part-three")[0].style.background = "blue",  // by using this method we can assigned a new class name by which we can change the background color of the element
    // document.querySelectorAll(".section-three__part-three")[0].style.transition = "1.5s" // by using this method we can assigned a new class name by which we can change the background color of the element
})
// 

// Item(Index)

document.querySelector(".section-three__part-four").addEventListener('click', function () {
    this.classList; // by using this method we can assigned a new class name by which we can change the background color of the element
})

let user1 = document.querySelector(".section-three__part-four").classList.item(1) 
console.log(user1); // this "ITEM" method reflect the name of multiple class name in console section by giving the index no in () parenthesis


// Contains("Class Name")

let user2 = document.querySelector(".section-three__part-four").classList.contains("champoo")
console.log(user2); // this "CONTAINS" method reflect the boolean data types i.e "TRUE" or "FALSE" of multiple class name present
//  in the given multiple class name in console section by enetering the name of the class name in () parenthesis