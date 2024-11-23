'use strict';

// Maps - objects which can containes other objects as key

// Creation of map object
const rest = new Map();
console.log(rest); // {}

// Toadd data we use .set method
rest.set('name', 'Classico italiano');
rest.set(1, 'Firenze, Italy').set(2, 'Warsaw, Poland');
console.log(rest); // { name → "Classico italiano", 1 → "Firenze, Italy", 2 → "Warsaw, Poland" }

// Multiple adding to map object of paires
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'organic'])
  .set('open', 11)
  .set('close', 21)
  .set(true, 'We are open :)')
  .set(false, 'We are close :(');
console.log(rest); // { name → "Classico italiano", 1 → "Firenze, Italy", 2 → "Warsaw, Poland", categories → (4) […] }

// To get data form map we use .get() method
console.log(rest.get('categories')); // [ "Italian", "Pizzeria", "Vegetarian", "organic" ]

// We can do some funny combination
const thisHour = 6;
console.log(
  rest.get(rest.get('open') < thisHour && rest.get('close') > thisHour)
); // We are close :(

// To check if map containes a key we use .has()
console.log(rest.has('open')); // true

// To delete we use .delete() method
rest.delete(2);
console.log(rest); //{ name → "Classico italiano", 1 → "Firenze, Italy", categories → (4) […], open → 11, close → 21, true → "We are open :)", false → "We are close :(" }

// To clear map we use .clear() method
// rest.clear();

// Array as an object can be used as a key pair in map
// But to retrive it we would have to set this array outside a a key so we would have a stabble variable which containes coordinates to value fo this data
const arrTest = [1, 2];
rest.set(arrTest, 'bla bla');
console.log(rest); // {rest of code... Array [ 1, 2 ] → "bla bla"}
console.log(rest.get([1, 2])); // undefiend
console.log(rest.get(arrTest)); // bla bla

// We can set objects like DOM elements as key of map element
rest.set(document.querySelector('h1'), 'h1 element');
console.log(rest);
const t = document.querySelector('h1');
console.log(rest.get(t));
