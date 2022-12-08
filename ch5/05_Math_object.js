// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 4.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

let random = Math.random();
let myInt;
let myArr = [0,0,0,0,0,0,0,0,0,0];

console.log(random);

for(let i = 0; i < 1000; i++) {
  random = Math.random();
  myInt = Math.floor(random * 10);
  myArr[myInt]++;
}

myArr.forEach((element,index) => {
 let str = '';
 for(let i = 0; i < element; i++) {
  str += "#";
 }
 console.log(index,str);
});