const getTodos = (resource) => {

  return new Promise((resolve,reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); // da string to an object
      resolve(data);
    } else if (request.readyState === 4) {
      reject('error getting resource');
    }
    });
    
    request.open('GET',resource);
    request.send();
  });

};

// the first getTodos().then() will return also a promise, so we can chain another then() after this to 
// handle another call and so on if one of the 3 calls breaks the catch() method will be fired
getTodos('todos/luigi.json').then(data => {
  console.log('promise 1 resolved: ', data);
  return getTodos('todos/mario.json');
}).then(data => {
  console.log('promise 2 resolved: ', data);
  return getTodos('todos/shaun.json');
}).then(data => {
  console.log('promise 3 resolved: ', data);
}).catch(err => {
  console.log('promise rejected', err);
});
