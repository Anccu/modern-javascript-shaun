const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

// the submit event expect click on submit button or press enter
form.addEventListener('submit', e => {
  e.preventDefault();// the default action to a submit event is to refresh the page, so we prevent this default action by using preventDefault() method
  // console.log(username.value); // we get the value of the input field
  console.log(form.username.value);// we can use id(username) or we can also use name property
});
