// addEventListener() Method very very important topic 

// document.querySelector("#pintu").style.backgroundColor = 'rgb(0, 150, 136)'

// document.getElementById("pintu").addEventListener("click" , user)

// function user() {
//     document.getElementById("pintu").style.background = "red"
// }




// document.getElementsByClassName("section-three__part-four")[0].addEventListener('click', function () {
    // this.style.border = "10px solid rgb(26, 35, 126)", this.style.borderRadius = "10px"  // "this" means "document.getElementsByClassName("section-three__part-four")"
// });



// console.log(user1);
// document.getElementsByClassName("section-three__part-four")[0].addEventListener('click', function () {
    // this.style.background =" rgb(79, 195, 247)", this.style.transition ="1s"   // <<< ---- 1st Method calling functon directly into ()
// });   

// document.getElementsByClassName("section-three__part-four")[0].addEventListener('click',user)  // <<< ---- 2nd Method declaring or assigned a function name (user) & then make function

// function user() {
//     document.getElementsByClassName("section-three__part-four")[0].style.background= "rgb(255, 112, 67)"  // <<< ---- 2nd Method continue make a function
//     document.getElementsByClassName("section-three__part-four")[0].style.transition= "1s"
// }


// document.querySelector(".section-three__part-four").addEventListener('click', function () {
    // this.style.border ="10px dotted rgb(106, 27, 154)"   // <<---- Blue dotted color
// },true)


// diffreent types of EVENTS
document.querySelector(".section-three__part-four").addEventListener('click', function (e) {
    this.style.background ="rgb(255, 112, 67)", this.style.transition ="1s", e.stopImmediatePropagation() //<<---- Orange color 
},true);


document.querySelectorAll(".section-three__part-four-body")[1].addEventListener("click", function (e) {   
    this.style.background ="rgb(118, 255, 3)", this.style.transition = "0.5s";//e.stopPropagation() // <<---- Green color
});  // "queryselector"  only apply on its first Div("section-three__part-four-body") element

document.querySelectorAll(".section-three__part-four-body p")[0].addEventListener("click", function (e) {
    this.style.border ="10px dotted rgb(233, 30, 99)"  // <<---- Pink dotted color
});  //  "querySelectorAll" applies any of its Div or class or id or tag (".section-three__part-four-body p") using [1] square bracket



// 𝘈𝘳𝘳𝘢𝘺.𝘧𝘳𝘰𝘮(𝘥𝘰𝘤𝘶𝘮𝘦𝘯𝘵.𝘲𝘶𝘦𝘳𝘺𝘚𝘦𝘭𝘦𝘤𝘵𝘰𝘳𝘈𝘭𝘭('.𝘵𝘰𝘱-𝘭𝘦𝘷𝘦𝘭-𝘦𝘯𝘵𝘳𝘺-𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘦𝘳')).𝘮𝘢𝘱(𝘦𝘭𝘦𝘮𝘦𝘯𝘵 => 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨(𝘦𝘭𝘦𝘮𝘦𝘯𝘵))