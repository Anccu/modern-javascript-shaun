// regular function
const calcArea = function(radius){
  return 3.14 * radius ** 2;
};


// arrow functions
const calcArea2 = (radius) => {
  return 3.14 * radius ** 2;
};

const area = calcArea2(5);
console.log('Area2 is: ', area);

// when there is only one parameter we can ommit the parenthesis otherwise we should use the parenthesis
const calcArea3 = radius => {
  return 3.14 * radius ** 2;
};

console.log('Area3 is: ',calcArea3(5));

// when there is only one return value in one line we can take away the 'return' word and also
const calcArea4 = radius => 3.14 * radius ** 2;

console.log('Area4 is: ',calcArea4(5));

// practice arrow functions

const greet = function(){
  return 'hello, world';
};

const greet2 = () => 'hello, world';

console.log(greet2());


const bill = function(products, tax){
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
};

const bill2 = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
}

console.log('bill: ',bill([10,15,30],0.2)); // 66
console.log('bill2:',bill2([10,15,30],0.2)); // 66