const title = document.querySelector('h1');
// title.setAttribute('style','margin: 50px'); // not recommended because it overrides previous styles

console.log(title.style);

console.log(title.style.color);

title.style.margin = '50px'; // does not override so it is better than the previous one
title.style.color = 'crimson';
title.style.fontSize = '60px'; // we need to use camel case because apparently we cant use '-'
title.style.margin = ''; // to erase previous margin style
