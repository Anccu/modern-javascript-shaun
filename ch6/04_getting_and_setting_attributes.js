const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.thenetninja.co.uk'); // (the attribute, the value)
link.innerText = 'The Net Ninja website';

const msg = document.querySelector('#ggg');
console.log(msg.getAttribute('class'));

msg.setAttribute('class','success');
msg.setAttribute('style','color:green');
