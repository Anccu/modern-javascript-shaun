const products = [
  {name: 'gold start', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

// first way of chaining methods
const filtered = products.filter(product => product.price > 20);

const promos = filtered.map(product => {
  return `the ${product.name} is ${product.price / 2} pounds`;
});

console.log(promos);

// second way of chaining methods

const promosv2 = products.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promosv2);