const arr = [3,2,5,4,6]
const name = "sangam"

// console.log(arr , name);

arr.unshift(88);
// console.log(arr);

arr.shift();
// console.log(arr);


// const arr1 = [2,4,3,5,8,1]
// console.log(arr1);

// const temp = arr.slice(1,2)
// console.log(temp);

const arr2 = [2,5,4,7,1,9]
// console.log(arr2.slice(1,5));


// const arr3 = [4,3,8,1,9,4,0]
// let temp = arr3.splice(1, 4)

// console.log(arr3);
// console.log(temp);

const arr3 = [4,3,8,1,9,4,0]
let temp = arr3.splice(1, 4, "delhi", "mumbai")

console.log(arr3);
console.log(temp);