const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

// show the popup
button.addEventListener('click', () => {
  popup.style.display = 'block';
});

// close the popup when click on the X
close.addEventListener('click', () => {
  popup.style.display = 'none';
});

// close the popup also when click outside of the popup
popup.addEventListener('click', () => {
  popup.style.display = 'none';
});