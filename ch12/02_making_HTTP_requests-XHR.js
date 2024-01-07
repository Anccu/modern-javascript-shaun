const request = new XMLHttpRequest();// we can use this objects to send requests

/**
 * In order to access the data and to know when the call is complete we need to use an 
 * event listener and we attach this to the request object itself.
 * readyState can have 4 values (see mdn documentation) 4 when the operation is complete
 * this code will print 4 request elements with different values of readyState
 */
request.addEventListener('readystatechange',() => {
  // console.log(request, request.readyState); //this line will print 4 request elements with different values of readyState
if(request.readyState === 4) {
  console.log(request.responseText);//will print a lot of JSONs
}
});

/**
 * the open method takes two arguments, the type of request and the endpoint 
 * to send the request we need to use the send() method
 */
request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();