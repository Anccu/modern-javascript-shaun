const getTodos = (resource,callback) => {
  const request = new XMLHttpRequest();// we can use this objects to send requests

  request.addEventListener('readystatechange',() => {
  if(request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText); 
    callback(undefined,data);// will print an array with a lot of objects
  } else if (request.readyState === 4) {
    callback('Could not fetch data', undefined);
  }
  });
  
  // request.open('GET','https://jsonplaceholder.typicode.com/todos/');
  request.open('GET',resource);
  request.send();
};

// if we need data before calling for other resources we can do like this example, but it is not 
// friendly and maintainable
getTodos('todos/luigi.json',(err,data) => {// by convention error first then the data
  console.log(data);
  getTodos('todos/mario.json',(err,data) => {
    console.log(data);
    getTodos('todos/shaun.json',(err,data) => {
      console.log(data);
    });
  });
});