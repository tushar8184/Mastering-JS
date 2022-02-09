let contact = document.querySelector(".navbar__menu").innerHTML;  /// very very useful topic

console.log(contact);  // to get the innerHTML file in CONSOLE


document.querySelector("h2").innerHTML = 'TUSSY' //you can change any text of any Tag Name by simply using this Queryselector
//  this above method is to set the innerHTML in webdesign  
document.querySelectorAll("h2")[1].innerHTML = 'PINTU'
let cont = document.querySelector("h2").innerText;
console.log(cont);


let tact = document.querySelector(".section-three__part-four").innerText;
console.log(tact); // QuerySelector return one value at a time u cant get the specfic tag or element value

let user = document.querySelectorAll(".section-three__part-four p")[0].innerHTML;
console.log(user); //QuerySelectorAll return the one or two value at a time u can get the specific tag name or HTML in Console




// document.querySelector(".section-three__part-four").classList = ("ladoo gopal")  // replacing  "CLASS" with the current "CLASS" name using "classList" method , it can reflect only in "ELEMENTS" section of Inspect & "CONSOLE" also
// document.querySelector(".section-three__part-four").classList.add("ladoo","gopal")  // adding "CLASS" with the current "CLASS" name using "classList" method , it can reflect only in "ELEMENTS" section of Inspect
document.querySelector(".section-three__part-four").className = 'champoo tussy' // replacing the current "CLASS" name using "className" method it can reflect only in "ELEMENTS" section of Inspect & "CONSOLE" also

let user1 = document.querySelector("#pintu").className
console.log(user1); // show the "CLASSNAME" of the specify "CLASS" in "CONSOLE" section of Inspect


// document.querySelector(".section-three__part-four").style.backgroundColor = 'rgb(0, 150, 136)' // set the background color of specific section in "DOCUMENT" using this "STYLE" method & reflect in the "ELEMENTS" section of the Inspect


