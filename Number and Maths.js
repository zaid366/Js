// number 

const number = 22 
console.log(number); 


const amouunt = new Number(101) // this will alwasy be a number can be convet to string and etc..
console.log(amouunt);


console.log(amouunt.toString()); //  coverted to stringe
console.log(amouunt.toFixed(2));  // how many  0 after poit ex( 100.00 )

const otherNum = 23.9211212
console.log(otherNum.toPrecision(2)); // aound off  the wali like ( 23.9 -> 24)

const  Num = 10000000
console.log(Num.toLocaleString('en-IN'));// some time it's  hard to count 0 and find 
//  this will her too read the amount like 100000 -> 1,0,0,0,0,0  -> it  can be read easily
// more methos are max , min etc....

//  +++++++++++++++++++ MAths ++++++++++++++++++++++
console.log(Math);    // Math s a object 

console.log(Math.abs(-4));// -4 to 4 
console.log(Math.round(4.7)); // raund off to 5

console.log(Math.SQRT2(4));// 2x2x2x2 =   12


//   random 

/*  
Math.random()..... 
 gives a random number between 0 and 1   -> 0 is included, 1 is not
*/


// Random number between 1 and 10:

console.log((Math.floor)(Math.random()*10)+1);// give  random number  1 to 10 


// Random number between 10 and 20:
const min = 10
const max  = 20

console.log(Math.floor (Math.random()* (max - min + 1)) + min); //  giive us  nmber 10 to 20 


