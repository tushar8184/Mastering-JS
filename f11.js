// Switch statement & Break 

let day = 3;

switch (day) {
    case 0: case 1: case 2:  
        console.log('Sunday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;

    default:
        console.log('Invalid day');
        break;
}


// below is how to use with comparision operator


let age = 31;
switch (true) {
    case (age >= 15 && age <= 30):
        console.log('you are eligible');
        break;
    case (age >= 21 && age <= 30):
            console.log('you are not eligible');
        break;    
    default:
        console.log('enter the valid age details');
        break;
}
