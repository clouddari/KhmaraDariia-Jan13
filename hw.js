/*
let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
    console.log('ви відмінили')
} else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}

*/


let numOrStr = prompt('input number or string');

switch(true) {
    case (numOrStr === null):
        console.log('ви відмінили')
        break;
    case (numOrStr.trim() === ''):
        console.log('empty string');
        break;
    case (isNaN(+numOrStr)):
        console.log('input is not a number');
        break;
    default:
        console.log('OK!');
        break;
}