// store data in local storage
localStorage.setItem('name','mario');  // (key, value)
localStorage.setItem('age',50);


// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// deleting data from local storage
// localStorage.removeItem('name'); // removes one item
localStorage.clear(); // removes all

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name,age);
