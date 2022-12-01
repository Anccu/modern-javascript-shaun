// variable & block scope
let age = 30; // global scope variable

// the same behaviour will happen if i use const instead of let

if(true){
  // age = 40; // this is global scope also
  let age = 40; // we redefine the variable inside the block so it is a block scope variable or local scope
  let name = 'shaun';
  console.log('inside first code block ', age, name); // 40 shaun

  if(true){
    console.log('inside second code block: ',age, name); // 40 shaun
  }

  if(true){
    let age = 50;
    console.log('inside third code block: ', age, name); // 50 shaun
  }
}


  console.log('otside code block ', age, name);
