// Async & Await
// we can set off all of our asynchronous code into a single function (asynchronous function)
// then we can use the Await keyword inside to chain promises together in a much readable way
// werever we call async function it will always return a promise
const getTodos = async () => { // to become an async function we have to use the async keyword

  // fetch returns a promise, await keyword stop the assigning of the value to the variable until the promise hase resolved
  const response = await fetch('todos/luigi.json');
  console.log(response);

  const data = await response.json();
  console.log(data);
  
  return data;

};


// const test = getTodos();
// console.log(test);


console.log(1);

getTodos()
  .then(data => console.log('resolved: ', data));

console.log(2);
console.log(3);


