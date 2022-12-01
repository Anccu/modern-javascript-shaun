// break & continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue; // go to the next iteration
  }

  console.log('your score:', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break; // break the iteration and go out of the for loop
  }

}