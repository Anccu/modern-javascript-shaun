// we can create an array this way
const names = ['shaun','crystal'];

// we can also create an array this other way
// whenever we use the word new we are creating some kind of object
const ages = new Array(20,25,30);

// I can create an empty object (literal syntax)
// insede we can acces a lot of properties using the _protp_ thing
const userOne = {};

// I can use also the object constructor
const userTwo = new Object();

// cant see properties from console on the browser but can use properties and methods how?
// when we try to access a property js wraps that into an wrapper object that has the properties and values that we ned, and when we finish using the method or property js unwrap that value and does everything under the hood
const name = 'mario'; 

// in this case it does not need to use the wrapper
const nameTwo = new String('ryu');

// everything in javascript is not an object, but everything in javascript can behave like an object thanks to the wrapper mechanism.
