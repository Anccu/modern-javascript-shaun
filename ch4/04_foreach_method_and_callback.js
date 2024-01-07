// callbacks & foreach

// we can pass a function as aparameter and we call it a callback function
const myFunc = (callbackFunc) => {
  // do something 
  let value = 50;
  callbackFunc(value);
}

// we can call the function and we can pass the parameter (a function), for example:
myFunc(value => {
  // do something 
  console.log(value);
}); // 50

console.log('------------------------------------------------------')

let people = ['mario','luigi','ryu','shaun','chun-li'];


// the first parameter is the value you are iterating at that moment
// the second parameter is the index
people.forEach((person,index) => { 
  console.log(index,person);
});

// we can also define the function and call it later
const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
};

people.forEach(logPerson);
