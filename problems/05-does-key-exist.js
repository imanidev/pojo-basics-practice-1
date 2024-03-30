/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

***********************************************************************/
let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
console.log(doesKeyExist(obj1, 'name')); // => false
console.log(doesKeyExist(obj1, 'course')); // => true

function doesKeyExist(obj, key) {
  for (let keys in obj) {
    if (obj[key] !== undefined) {
      return true;
    }
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = doesKeyExist;
