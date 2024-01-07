// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();// sort alphabetically, and  does not create a new array, it changes the original array
names.reverse();// reverse the array
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort();
scores.reverse();
console.log(scores);// return [10,20,35,45,5,50,70] ordered by only the first digit

// example 3 = sorting objects
const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 70},
  {name: 'chun-li', score: 10},
  {name: 'yoshi', score: 50},
  {name: 'shaun', score: 30},
];

// players.sort();// does not going to work because it does no know what to sort
// to solve this problem we need to write a callback function and return a number that will be positive, negative or zero according to the order of the numbers

// it will corret the bad behaviour esplained before
scores.sort((a,b) => a - b);
console.log(scores);

//example
players.sort((a,b) => {
  if(a.score > b.score){
    return -1; // a comes first
  } else if (b.score > a.score) {
    return 1; // b come first
  } else {
    return 0;// both elements are equals
  }
});

//short version
players.sort((a,b) => b.score - a.score);

console.log(players);