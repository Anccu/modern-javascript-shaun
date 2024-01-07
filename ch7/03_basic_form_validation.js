const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

// the submit event expect click on submit button or press enter
form.addEventListener('submit', e => {
  e.preventDefault();// the default action to a submit event is to refresh the page, so we prevent this default action by using preventDefault() method

  // validation
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if(usernamePattern.test(username)){
    // feedback good info
    feedback.textContent = 'That username is valid!';
  } else {
    // feedback info
    feedback.textContent = 'Username must contain letters only & be between 6 & 12 characters long';
  }
  
});


