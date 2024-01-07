const title = document.querySelector('h1');
// title.setAttribute('style','margin: 50px'); // not recommended because it overrides previous styles

console.log(title.style);

console.log(title.style.color);

title.style.margin = '50px'; // does not override everything so it is better than the previous one
title.style.color = 'crimson';
title.style.fontSize = '60px'; // we need to use camel case because  we cant use '-', in JS it's a minus sign
// you can see the list with the previous console.log(title.style) it will show CSSStyleDeclaration object with the list of all the names 
title.style.margin = ''; // to erase previous margin style
// title.style.color = 'blue'; //override the previous color style 'crimson'
