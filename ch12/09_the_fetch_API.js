// fetch API
// the promise is rejected when there is a network error, if we mispelled the file it will not reject but the response.status will be for example 404
// we use then and catch methods for resolve and reject respectively
fetch('todos/luigi.json').then(response => {// the argument is the resource we want to fetch (es an endpoint)
  console.log('resolved', response);
  return response.json();// json is the method that get us the data from the response, this sentence return a promise so we chain another .then() after this
}).then(data => {//data is returned from response.json()
  console.log(data);
}).catch(err => {
  console.log('rejected',err);
});