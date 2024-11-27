'use strict';

// Strings
// whenever method is called on string, JS engine recongize if the variable is primitive value and then do the boxing, which creates string object.
// After method is called, the type of returned data is primitive object

// Slicing of Strings
const testString = 'Tupolew';
console.log(testString[0]); // T
console.log(testString[1]); // u
console.log(testString[2]); // p

// We can check the lenght of string just like arrays, objects etc.
console.log(testString.length); // 7

// To check index number of symbol we are using .indexof()
console.log(testString.indexOf('p')); // 2

// We can use .indexof() to check entire words
console.log(testString.indexOf('pol')); //2

// To check index number of symbol from the end .lastIndexOf()
console.log(testString.lastIndexOf('e')); // 5

// We can use .slice() method to receive parts of strings, like in python with :.
// First past value is included in search, second value is not
console.log(testString.slice(2)); // polew
console.log(testString.slice(2, 3)); // just p

// We can easly combine slice with indexof
const skyrim = 'This lands belongs to the North';
console.log(skyrim.slice(0, skyrim.indexOf(' '))); // This

// We can use negative number in .slice()
console.log(skyrim.slice(-5)); // North

// Function to operate on stirngs
function checkSet(seat) {
  const letter = seat.slice(-1);
  letter === 'B' || letter === 'E'
    ? console.log("It's a middle seat")
    : console.log("It's not a middle seat");
}

checkSet('11B');
