// function declaration  (there is hoisting in function declaration)
function greet(){
  console.log('hello there');
}

greet(); // calling the function or invoking the function
greet();
greet();


// function expression -  there is no hoisting in function expressions

const speak = function(){ // this is called an expression because it has an assignment
  console.log('good day');
};

speak();
speak();
speak();