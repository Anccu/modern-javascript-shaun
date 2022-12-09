const para = document.querySelector('p'); // grab the first p tag and ignore the rest
console.log(para);

const err = document.querySelector('.error');
console.log(err);

const err2 = document.querySelector('div.error');
console.log(err2);

/* To find a selector do this:
- inspect the element you want a selector for
- in the tab 'elements' right click on the element > copy > 'copy selector'
*/

console.log('-----------------------------------------------');
const paras = document.querySelectorAll('p'); // will get all the p tags
console.log(paras); // print a node list with the elements
console.log(paras[2]); // prints the element with index 2

console.log('-----------------------forEach------------------------');
paras.forEach(para => {
  console.log(para);
});

console.log('------------------------errors-----------------------');
const errors = document.querySelectorAll('.error');
console.log(errors)