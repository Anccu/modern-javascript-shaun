const button = document.querySelector('button');

button.addEventListener('click',() => {
  console.log('you clicked me');
});

const items = document.querySelectorAll('li');

// note we can't attach an event listener to the items variable because it's a node list and we attach the event listener to individual elements, so we need to cycle the node list

// note2 everytime the event happens the web browser gives us a parameter with the information of the event, in this example we will call the parameter e
items.forEach(item => {
  item.addEventListener('click',(e) => {
    // console.log('item clicked');
    // console.log(e.target); // will log the item clicked
    // console.log(item); // will log the item clicked
    e.target.style.textDecoration = 'line-through';
  });
});