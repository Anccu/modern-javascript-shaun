const now = new Date();

// we can access to this object now
console.log(dateFns.isToday(now));// prints true

// formatting options
console.log(dateFns.format(now,'YYYY'));// prints 2023
console.log(dateFns.format(now,'MMMM'));// prints May
console.log(dateFns.format(now,'dddd'));// prints Monday
console.log(dateFns.format(now,'Do'));// prints 22nd
console.log(dateFns.format(now,'dddd Do MMMM YYYY'));// prints Monday 22nd May 2023

// comparing dates
const before = new Date('February 1 2023 12:00:00');

console.log(dateFns.distanceInWords(now,before,{addSuffix: true}));// the third argument is optional