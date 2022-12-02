// arguments & parameters

// we can pass only (name,time) but is better if we give default values in case the function does not receive any arguments
const speak = function(name = 'luigi', time = 'night'){
  console.log(`good ${time} ${name}`);
};

speak('mario','morning'); // good morning mario
speak(); // good night luigi

console.log('----------------------------------------------------');

const calcArea = function(radius){
  let area = 3.14 * radius ** 2;
  return area;
}

const area = calcArea(5);
console.log(area); // 78.5
