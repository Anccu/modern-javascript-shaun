/* 
*primitive types are stored on the stack which is a faster memory but does not have as much of space as heap -> numbers, strings, booleans, null, undefined, symbols

*object types are stored in the heap wich is bigger but slower -> all types of objects, object literals, arrays, functions, dates, all other objects 
*/

// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// reference types
const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 40;
console.log(userOne,userTwo);