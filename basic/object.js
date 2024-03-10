// const obj1 = {1:"aa", 2:"bb"}
// const obj2 = {3:"aa", 4:"bb"}

// const obj3 = Object.assign ( obj1, obj2)  // All object are assign to obj1...
//                                           // So obj3 === to obj1
// console.log(obj1 === obj3);
// console.log(obj3);


const obj1 = {1:"aa", 2:"bb"}
const obj2 = {3:"aa", 4:"bb"}

const obj3 = Object.assign ({}, obj1, obj2)  // All object are assign to new object {},
                                              // So obj3 ans obj1 are NOT equal;
const obj4 = {...obj1, ...obj2};
// console.log(obj4);
// console.log(obj1 === obj3);
// console.log(obj3);

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));


const game = {

    cricket : "cccccc",
    footboll : "fffff",
    tenish : "ttttt"
}

// console.log(game.cricket);
 
const {cricket} = game
// console.log(cricket);

const {cricket : ck, footboll : fb} = game
console.log(ck);
console.log(fb);

