// Prompt Function

// var day = prompt('Enter the Day');
// // let day = 3;


// if (day === 0 && day == 1 ) {
//     document.write('Sunday');
// }else if (day == 1 && day == 2) {
//     console.log('Monday');
// }else if (day === 2) {
//     console.log('Tuesday');
// }else if (day === 3) {
//     console.log('Wednesday');
// }else if (day === 4) {
//     console.log('Thursday');
// }else if (day === 5) {
//     console.log('Friday');
// }else if (day === 6) {
//     console.log('Saturday');
// }else{
//     console.log('Invalid day');
// }

let per = prompt('Enter tour percentage');

if (per >= 80 && per <= 100) {
    console.log('You are in Merit');
} else if (per >= 60 && per <= 80) {
    console.log('You are in 1st Division');
}else if (per >= 45 && per <= 60) {
    console.log('You are in 2nd Division');
}else if (per >= 35 && per <= 45) {
    console.log('You are in 3rd Division');
}else if (per < 35) {
    console.log('You are Fail');
}else {
    console.log('Please enter valid percentage');
}
    
