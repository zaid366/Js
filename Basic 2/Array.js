// array 

const  asrray = [0,1, 2, 3, ,4, 5, ]

console.log(asrray);

const array2 = [ 'a', 'b', 'c', 'd']

const myarray  =   new Array(1,2,3,4)
console.log(myarray[1]);

// array method

myarray.push(6)//  add vale  entered
myarray.pop(5)// pop the value
myarray.shift()

console.log(myarray.includes(9));
console.log(myarray.indexOf(3));

const  newArray =  myarray.join()

console.log(myarray);// remain as it is
console.log(newArray); // converted into srtige


// slice & splice

// slice 
const ArrayNew = [0,1,2,3,4,5]


console.log("A", ArrayNew);

const ArrayNew1 = ArrayNew.slice(1,3)
console.log( ArrayNew1);
console.log("B", ArrayNew);


// splice

const ArrayNew2 = ArrayNew.splice(1,3)
console.log(ArrayNew2);



