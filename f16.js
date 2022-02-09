//  Function Parameters

function pintu(num1, num2) {          
    console.log(num1 + num2);  
}

pintu(20,30.5);


function tussy(fisrtName , lastName ) {    // 'firstName and lastName are called function parameters      
    console.log( 'hello ' +  fisrtName + ' ' + lastName);  
}

tussy('pintu', 'patel');   // 'pintu' & 'patel' are called function Arguments.
tussy('chickoo', 'piku')   // you can overright it also by passing another arguments



function tushar(fisrtName = 'tushar', lastName = 'patel') {          
    console.log( 'hello ' +  fisrtName + ' ' + lastName);  
}

tushar();


//  below are the example of Return Statement

function test(r, s) {
    return r + s;
  }
  var t = test(50, 20);
  console.log(t);


  function pintu(firstName, lastName) {
      return `hi this is ${firstName} ${lastName}`
  }

  let user = pintu('tushar', 'patel');
  console.log(user);

  /* When a Return statement is used in a function body
  ,the execution of the function is stopped */


//   below are the example of Passing statement 

function hero(firstName, lastName) {
    return `Hello this is ${firstName} ${lastName}`;
}

let firstName = 'chickoo';
let lastName = 'patel'
let pintoo = hero(firstName,lastName);
console.log(pintoo);

// let lastName ='patel';
// let piintu = hero(firstName,lastName);
// console.log(pintoo);
   