// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error'); // add class
// content.classList.remove('error'); // remove class
// content.classList.add('success');

// // exercise 
// // add error or uccess class according to the content of every p tag
// const pElements = document.querySelectorAll('p');

// pElements.forEach(pElement => {
//   console.log(pElement.innerText);
//   if(pElement.innerText.indexOf('error') > -1) pElement.classList.add('error');// we can use 'includes' instead of 'indexOf'
//   if(pElement.textContent.includes('success')) pElement.classList.add('success');
//   // note: innerText gives just all the 'visible' text, but textContent gives all the content even if it is hidden
// });

// const title = document.querySelector('.title');
// // use togle to remove the class if it's there and to add the class if it's not there
// title.classList.toggle('test');
// // title.classList.toggle('test');

// -------------------------------------------------------------------------------------------
 const article = document.querySelector('article');
 console.log(article.children); // print an html collection
 console.log(Array.from(article.children)); // this method convert an html collection into an array node and print it
 

 Array.from(article.children).forEach((child) => {
  child.classList.add('article-element');
 });

 const title = document.querySelector('h2');

 console.log(title.parentElement);// prints the parent element
 console.log(title.parentElement.parentElement);
 console.log(title.nextElementSibling);// prints the next sibling element
 console.log(title.previousElementSibling); // prints null because we don't have a previus siblin element
console.log(title.nextElementSibling.parentElement.children);//chaining, gives the html collection
