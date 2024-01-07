// grab a reference to the paragraph
const para = document.querySelector('p');// grab the first element
console.log(para.innerText);// show the first element
console.log('-----------------------------------------------------');

// change the inside of the tag
para.innerText = 'ninjas are awesome!';
console.log(para.innerText);
console.log('-----------------------------------------------------');

// if you just wanna append some text you can use += sign
para.innerText += '!!!';
console.log(para.innerText);
console.log('-----------------------------------------------------');

// to change the text of several elements at the same time
const paras = document.querySelectorAll('p');// get all the elements as a node list
// show each one of the list and add an extra text to each one of those elements
paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' new text';  
});
console.log('-----------------------------------------------------');

// get a reference of an alement
const content = document.querySelector('.content');

// add some content to the inner html
console.log(content.innerHTML);
content.innerHTML += '<h2> This is a new h2</>';// if we want to replace we use = sign instead of =+
console.log('-----------------------------------------------------');


const people = ['mario','luigi','yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});