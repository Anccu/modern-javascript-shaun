const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

// the submit event expect click on submit button or press enter
form.addEventListener('submit', e => {
  e.preventDefault();// the default action to a submit event is to refresh the page, so we prevent this default action by using preventDefault() method
  // console.log(username.value); // we get the value of the input field
  console.log(form.username.value);// we can use id(username) or we can also use name property
});

//testing regex
const username = 'shaund';
// a regex is contain between two caracters slashes
// [a-z] checks for lower case letters only
// {6,10} checks for 6 to 10 characters (length)
// {6,} if we take the 10, it checks for at least 6 characters without upper limit
// ^ means this word must be at the start
// $ means this word must be at the end
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// // console.log(result);

// if(result) {
//   console.log('regex test passed :(');
// } else {
//   console.log('regex test failed :(');
// }

//another method to test regex
let result = username.search(pattern);// return 0 if it gets a match, -1 otherwise, 0 because it's the position of the match when is finded
console.log(result);

