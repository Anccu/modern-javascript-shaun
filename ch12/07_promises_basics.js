const getTodos = (resource) => {

  return new Promise((resolve,reject) => {

    const request = new XMLHttpRequest();// we can use this objects to send requests

    request.addEventListener('readystatechange',() => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText); 
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });
    
    request.open('GET',resource);
    request.send();
  });

};

getTodos('todos/luigi.json').then(data => {
  console.log('promise resolved: ', data);
}).catch(err => {
  console.log('promise rejected', err);
});

// // promise example
// const getSomething = () => {
//   // promise takes a function as a parameter and can return two outcomes (resolve or reject) it depends of the result of the network call
//   // the function takes also two arguments as parameters resolve and reject which are built in parameters (are functions actually) in the Promise API
//   return new Promise((resolve,reject) => {
//     // fetch something
//     // resolve('some data'); // if we have data
//     reject('some error'); // if we have an error
//   });
// }

// // this function will return a promise with either resolve or reject result (not sure what it means exactly but the idea kind of make sense)
// // when it resolves the callback function it fires the 'then()' method which can take two arguments the first for the resolve method and the second for the reject method
// getSomething().then(data => {
//   console.log(data);
// }, err => {
//   console.log(err);
// });


// // we can do another way also
// // when we get resolve() it executes the then() method
// // when we get reject() it executes the catch() method
// getSomething().then( data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });