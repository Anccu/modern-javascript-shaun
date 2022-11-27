let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25); // true
// console.log(age == '25'); // true -> because it's loose comparison two different types can be equal
// console.log(age != 25); // false
// console.log(age != '25'); // false

// strict comparison (different type cannot be equal)

console.log(age === 25); // true
console.log(age === '25'); // false -> two different typas can't be equals
console.log(age !== 25); // false
console.log(age !== '25'); // true
