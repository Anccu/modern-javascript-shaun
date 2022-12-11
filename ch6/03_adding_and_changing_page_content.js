// grab a reference to the paragraph
const para = document.querySelector('p');
console.log(para.innerText);
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
const paras = document.querySelectorAll('p');

paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' new text';  
});
console.log('-----------------------------------------------------');

const content = document.querySelector('.content');

console.log(content.innerHTML);
content.innerHTML += '<h2> This is a new h2</>';
console.log('-----------------------------------------------------');

const people = ['mario','luigi','yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});