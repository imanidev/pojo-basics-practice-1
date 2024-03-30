/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
***********************************************************************/

function getFullName(person) {
  let arrValues = Object.values(p2);
  let name = [];
  for (let i = 0; i < arrValues.length; i++) {
    let value = arrValues[i];
    if (typeof value === "string") {
      name.push(value);
    }
  }
  return name.join(' ') ;
}
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(getFullName(p2)); // => 'Charlie Brown'


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
