// dates & times
const now = new Date();
console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear()); // prints 2023
console.log('getMonth:',now.getMonth()); // it prints 4 because we are in may (start from zero apparently)
console.log('getDate:',now.getDate()); // prints 22 because we are 22
console.log('getDay:',now.getDay());// prints 1 because it is monday
console.log('getHours:',now.getHours());// prints 19
console.log('getMinutes:',now.getMinutes());// prints 35
console.log('getSeconds:',now.getSeconds());// prints 50


// timestamp
console.log('timestamp:',now.getTime());// the numbers of miliseconds since the first of january 1970

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());