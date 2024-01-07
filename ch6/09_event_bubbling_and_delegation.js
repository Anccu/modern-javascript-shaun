const ul = document.querySelector('ul');

// ul.remove(); // remove the element
const button = document.querySelector('button');
button.addEventListener('click',() => {
  // ul.innerHTML += '<li>something new</li>';
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  // ul.append(li); // appends a li element to the bottom of the ul(list)
  ul.prepend(li);
});

const items = document.querySelectorAll('li');

// note we can't attach an event listener to the items variable because it's a node list and we attach the event listener to individual elements, so we need to cycle the node list

// note2 everytime the event happens the web browser gives us a parameter with the information of the event, in this example we will call the parameter e
// items.forEach(item => {
//   item.addEventListener('click',(e) => {
//     console.log('event in LI');
//     e.stopPropagation();// allows us to stop the propagation of the event
//     e.target.remove();// remove the element when clicked
//   });
// });

// attach events to a lot of things might be expensive, so we will attach the event listener to a single element and take advantage of the event bubbling
ul.addEventListener('click',e => {
  // console.log('event in UL');
  console.log(e);
  if(e.target.nodeName === 'LI'){ // works also with tagName property
    e.target.remove(); // only if we clicked on the li element (and not outside) we will remove the element
  }
});
