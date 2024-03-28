/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}

// function valuesInObject(obj) {
//   return Object.values(obj)

// }

const valuesInObject = obj => {

  let valueArr = [];

  for (let key in obj) {
    let value = obj[key];
    valueArr.push(value);
  }
  return valueArr;
}

console.log(valuesInObject(foods))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
