const getTodos = (callback) => {
  const request = new XMLHttpRequest();// we can use this objects to send requests

  request.addEventListener('readystatechange',() => {
  if(request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText); // we use this object JSON that has a method that allows us to convert string to JSON
    callback(undefined,data);// will print an array with a lot of objects
  } else if (request.readyState === 4) {
    callback('Could not fetch data', undefined);
  }
  });
  
  // request.open('GET','https://jsonplaceholder.typicode.com/todos/');
  request.open('GET','todos.json');
  request.send();
};

console.log(1);
console.log(2);

getTodos((err,data) => {// by convention error first then the data
  console.log('callback fired');
  //console.log(err,data);
  if(err){ // if error exists 
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);