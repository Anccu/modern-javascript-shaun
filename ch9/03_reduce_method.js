// reduce method
const scores = [10, 20, 60, 70, 90, 30];

// iterates an array and perform a callback function and return a value that could be an array, a string or a number, ecc that you want based on the value of the array.

// the second value of the reduce method is the initial value of the accumulator
const result = scores.reduce((accumulator, current) => {
  if(current > 50) {
    accumulator++;
  }
  return accumulator;
}, 0);

console.log(result);

const scoresv2 = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
];

const marioTotal = scoresv2.reduce((accumulator, current) => {
  if(current.player == 'mario'){
    accumulator += current.score;
  }
  return accumulator;
},0);

console.log(marioTotal);