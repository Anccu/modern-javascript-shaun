const request = new XMLHttpRequest();// we can use this objects to send requests

/**
 * In order to access the data and to know when the call is complete we need to use an 
 * event listener and we attach this to the request object itself.
 * readyState can have 4 values (see mdn documentation) 4 when the operation is complete
 * this code will also check that the status code is 200 (means everything is ok)
 */
request.addEventListener('readystatechange',() => {
if(request.readyState === 4 && request.status === 200) {
  console.log(request,request.responseText);
} else if (request.readyState === 4) {
  console.log('Could not fetch data');
}
});

/**
 * the open method takes two arguments, the type of request and the endpoint 
 * to send the request we need to use the send() method
 */
request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();