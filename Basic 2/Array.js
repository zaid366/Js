// array
const asrray = [0, 1, 2, 3, 4, 5];
console.log(asrray);

const array2 = ['a', 'b', 'c', 'd'];

const myarray = new Array(1, 2, 3, 4);
console.log(myarray[1]);

// array method
myarray.push(6);
myarray.pop();
myarray.shift();

console.log(myarray.includes(9));
console.log(myarray.indexOf(3));

const newArray = myarray.join();

console.log(myarray);
console.log(newArray);

// slice & splice
const ArrayNew = [0, 1, 2, 3, 4, 5];

console.log("A", ArrayNew);

const ArrayNew1 = ArrayNew.slice(1, 3);
console.log(ArrayNew1);
console.log("B", ArrayNew);

const ArrayNew2 = ArrayNew.splice(1, 3);
console.log(ArrayNew2);

// array pt 2
const Hero = ["thor", "spider", "iron man"];
const dcHero = ["Batman", "super Man", "flash"];

const allHero = Hero.concat(dcHero);
console.log(allHero);
console.log(Hero);

// Flat array
const another = [1, 2, [3, 4], [5, [6, 7]]];
const flatArray = another.flat(Infinity);
console.log(flatArray);

