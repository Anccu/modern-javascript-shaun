// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blog: ['why mac & cheese rules','10 things to make with marmite']
};

console.log(user);
console.log(user.name);

user.age = 35;   // we can update a property of an object
console.log(user.age);

// we can also acces the property using square brackets
console.log(user['name']);
user['name'] = 'chun-li'; // we can also update a valur this way
console.log(user['name']);


// we can access a property with a variable
const key = 'location'; // location is a property
console.log(user[key]); // instead of using user['location']


// we can see the type using the 'typeof' operator
console.log(typeof user); // object