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
items.forEach(item => {
  item.addEventListener('click',(e) => {
    e.target.remove();// remove the element when clicked
  });
});


