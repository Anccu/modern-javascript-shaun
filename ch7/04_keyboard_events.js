const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// the submit event expect click on submit button or press enter
form.addEventListener('submit', e => {
  e.preventDefault();// the default action to a submit event is to refresh the page, so we prevent this default action by using preventDefault() method

  // validation
  const username = form.username.value;

  if(usernamePattern.test(username)){
    // feedback good info
    feedback.textContent = 'That username is valid!';
  } else {
    // feedback info
    feedback.textContent = 'Username must contain letters only & be between 6 & 12 characters long';
  }
  
});

console.log(form.username);

// live feedback
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value); 
  if(usernamePattern.test(e.target.value)){
    console.log('passed');
    form.username.setAttribute('class','success');
  } else {
    console.log('failed');
    form.username.setAttribute('class','error');
  }
});
