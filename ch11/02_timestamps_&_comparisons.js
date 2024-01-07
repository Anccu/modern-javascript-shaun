// timestamps

const before = new Date('February 1 2023 7:30:59');
const now = new Date();

console.log(now.getTime(),before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);// differences in milliseconds

const mins = Math.round(diff / 1000 / 60); // minutes between the two dates
const hours = Math.round(mins / 60); // hours between the two dates
const days = Math.round(hours / 24); // days between the two dates
console.log(mins, hours, days);
console.log(`The blog was written ${days} days ago`);

// converting timestamps into date objects
const timestamp = 1684779930729;
console.log(new Date(timestamp));