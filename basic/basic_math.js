const score = 1132400
console.log(typeof score);

const temp = score.toString()

console.log(typeof temp)
console.log(temp)
console.log(temp.length)

const number = 234.446
console.log(number.toFixed(1));
console.log(number.toPrecision(3));


console.log(Math);
console.log(Math.floor(4.8));
console.log(Math.ceil(5.9));
console.log(Math.round(56.75));


console.log(Math.max(2,4,3,5,6,7));
console.log(Math.min(2,4,3,5,6,7));

console.log(Math.floor ( Math.random() * 10 ) );

let min = 5
let max = 10

console.log( Math.floor(Math.random() * (max - min +1)) + min );
