console.log(1);
console.log(2);

setTimeout(() => {
  console.log('callback function fired');
}, 2000);
console.log(3);
console.log(4);
console.log(5);
// it prints 1 2 3 4 5 and then 'callback function fired'