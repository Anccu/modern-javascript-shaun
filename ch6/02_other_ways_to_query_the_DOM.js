// Other ways to query the DOM
// get an element by id (get an reference of that element)
const title = document.getElementById('page-title');
console.log(title);
console.log('---------------------------------------------------');

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors); // result a html list
console.log(errors[0]); // we can retrieve an element by index

/*
// we cannnot use foreach method with html lists
errors.forEach(error => {
  console.log(error); // gives error
});
*/
console.log('---------------------------------------------------');

// get elements by their tag name 
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
console.log('---------------------------------------------------');

/**
 * HTMLCollection methods
 * .item()
 * .namedItem()
 * 
 * Node List methods
 * .item()
 * .entries()
 * .forEach()
 * .keys()
 * .values()
 */