const scores = [10, 30, 15, 25, 50, 40, 5];

// filter method fires a callback function for each item inside the array, if it return true it keeps the item in the array
const filteredScores = scores.filter((score) => {
  return score > 20; // return only the scores greater than 20
  ;
});

// filter does not alter the original array so we need to save the result in another variable
console.log(scores); // prints the original array
console.log(filteredScores);// prints the filtered array

console.log('---------------------------------------');

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

const premuimUsers = users.filter((user) => {
  return user.premium;// if true it's gonna keep the property
});

console.log(premuimUsers);