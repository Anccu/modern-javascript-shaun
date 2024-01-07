// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

/* takes an array and maps that into a completely new array, it iterate an array and returns an updated value for each item in the array and then it pushes that updated value into a new array */

const salePrices = prices.map((price) => {
  return price / 2;
});

console.log(salePrices);


const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];

// we don't want to change the original array so we return a new object
const saleProducts = products.map((product) => {
  if(product.price > 30) {
    return{name: product.name, price: product.price / 2}
  } else {
    return product;
  }
});

console.log(products);
console.log(saleProducts);
