'use strict';

const hours = {
  fri: { open: 8, closed: 21 },
  sat: { open: 10, closed: 21 },
  sun: { open: 12, closed: 23 },
};

// We can iterate through maps withou calling a method to create an array just like in case of object.
// Other good way of creating an object is to pass them in form of array in arry construction, where each inside array is a pair of data.

const question = new Map([
  ['question', 'What is the best programming langauge?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 💕'],
  [false, 'Try again.'],
]);

console.log(question);

// We can convert objects into map if we want
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap); // Map(3) { fri → {…}, sat → {…}, sun → {…} }

// Converting map to array
const hoursAry = [...hoursMap];
console.log(hoursAry);
console.log(...hoursMap.keys()); // fri sat sun
console.log(...hoursMap.values()); //{ open: 8, closed: 21 } Object { open: 10, closed: 21 } Object { open: 12, closed: 23 }

// To iterate over map we dont need objects.entries because its construction is already in form of array
// Example
console.log(question.get('question'));
for (const [key, val] of question) {
  if (typeof key === 'number') {
    console.log(`${key}: ${val}`);
  }
}
// const userAnswer = Number(prompt('Chose your answer:')); turn of to stop asking questions
const userAnswer = 3;
userAnswer === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));
