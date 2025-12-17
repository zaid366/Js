// Date

// date is a objesct represent a single moment in time in a platform 
// It represents a single point in time as the number of milliseconds
//  since the Unix Epoch (midnight on January 1, 1970, UTC)

let  myDate =  new Date()
console.log(myDate); // will give the value u can't read & understand

// date to stringe 

console.log(myDate.toString()); // will give u the value like wed Mar 01  2025 can be read

// date to dates string 
 console.log(myDate.toDateString());// will give to  exacte date of today
 // date to ISOStringe

 console.log(myDate.toISOString()); //  will give to  exacte date w  some kind of time
 // date to localstringe

 console.log(myDate.toLocaleString());  // will give to  exacte date and time

 // what is date type 

 console.log(typeof(myDate)); // objject

 let myCreatedDate = new Date ( 2025, 1, 12)
console.log(myCreatedDate.toDateString()); //  will give to  exacte date that u enterd + month
 
 //  moths start with 0, to 11

  let myCreatedDate2 = new Date ( 2025, 1, 12,10,28)
console.log(myCreatedDate2.toDateString()); //  will give to  exacte date that u enterd + month +  time

// how u can dte in this ormate 12/15/2025
 
let newDate = new Date("2025-01-25")
console.log(newDate.toLocaleString());// will five u the 1/25/2025

// MM/DD/YY


 let newDate2 = new Date("01/15/2025")
console.log(newDate2.toLocaleString());

// time stamps

let myTimeStamp = date.now ()
console.log(myTimeStamp);// vale in mili seconod a Large number like 123125398000

console.log(newDate2.getTime());//  aslo give u lage  number  to compare 

// date conver to seconds 

console.log(Math.floor(date.now)/1000); // will give result in second not mili second


// more method
let dateMonth = new Date()
console.log(dateMonth.getMonth()); // will give u month 
// more are .getDay , getTieem , getYear


//  