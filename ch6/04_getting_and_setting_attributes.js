const link = document.querySelector('a');// grab the first ancher tab and store in the link variable

console.log(link.getAttribute('href'));// print the value of the href attribute

link.setAttribute('href','https://www.thenetninja.co.uk'); // (the attribute, the value) it replace the href attribute with a new value
link.innerText = 'The Net Ninja website';

const msg = document.querySelector('#ggg');
console.log(msg.getAttribute('class')); // class = error

msg.setAttribute('class','success');// replace the class error with success class
msg.setAttribute('style','color:green');// set a style property
