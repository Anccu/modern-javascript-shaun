let ninjas = ['shaun', 'ryu', 'chun-li'];

// console.log(ninjas);
// console.log(ninjas[1]);

// to override an element
// ninjas[1] = 'Ken';
// console.log(ninjas[1]);

// let ages = [20, 29, 30, 35];
// console.log(ages[2])

// you can mix it up, but it's not a good practice
// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);


// some array methods
// console.log(ninjas.length);

// let result = ninjas.join('-'); // join the elements in a unique string

// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat('Ken','crystal');
let result = ninjas.push('ken');// returns the new length of the array
result = ninjas.pop(); // remove the las value and return the value removed
console.log(result);
