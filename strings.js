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

// Second Part
// Affecting string by lowercase and uppercase
const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Fixing the capitalization in name
const passenger = 'mIcHal';
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

// Comapring emails
const email = 'hello@mk.pl';
const loginEmail = '  HeLLo@mK.pl \n';

// Trim allwos us to remove white spaces amd new lines
const correctEmail = email.toLowerCase().trim();
console.log(correctEmail);
console.log(correctEmail === email);

// Replaceing symbols with .replace() method or replaceAll()
const priceBG = '299,23&';
const priceUK = priceBG.replace(',', '.').replace('&', '$');
console.log(priceUK);

// Booleans for Strings - includes(), startWith() and endsWith() methods
const mk = 'Super Duper Turbo';
console.log(mk.includes('uper')); // true
console.log(mk.startsWith('Sup')); // true
console.log(mk.endsWith('urbo')); // true

// Part 3
// Split method which returns array. We can pass parameter by which input should be split.
console.log('Mare+Darek+Ogarek'.split('+'));

// We can use deconstruction on splited parts
const [name1, name2, ...name3] = 'World of WarCraft: The Burning Crusade'.split(
  ' '
);
console.log(name1, name2, name3);

// Join method allows us to combine elements in array with each other
const newName = ['The best dlc of WoW was:', name1, name2, ...name3].join(' ');
console.log(newName);

// Example which combine split and slice
function capitalizeName(name) {
  const splitName = name.split(' ');
  const finalName = [];
  for (let n of splitName) {
    finalName.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(finalName.join(' '));
}

capitalizeName('michal krepiniewicz');

// Padding allows us to add characters into the string until reach specific number
const message = 'Badumcisz';
console.log(message.padStart(15, '+')); // ++++++Badumcisz
console.log(message.padEnd(15, '-')); // Badumcisz------

// Example with card number
function maskeCardNumbers(num) {
  const numStr = num + '';
  console.log(numStr.slice(-4).padStart(numStr.length, '*'));
}
maskeCardNumbers(1234567890);

// Repeat method allows us to repeat string n times
// We can repeat even symbols like ✈️
const message2 = 'This is test! ';
console.log(message2.repeat(5));

console.log(`The are 5 planes in port: ${'✈️'.repeat(5)}`);
