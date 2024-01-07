// find method 
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// will iterate the array and execute a callback function for each element in the array, as soon it passes some condition it will return that value and the iteration will be stoped

const firstHighScore = scores.find(score => {
  return score > 50;
});

console.log(firstHighScore);// prints 60