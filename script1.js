//  Destructuring arrays
const arr = [1, 2, 3];

const [a, b, c] = arr;
console.log(a);
// Destructuring is not affecting original array
console.log(arr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const [a1, b2] = restaurant.categories;
// If we would like to get options from position 0 and 3

let [a1, , b2] = restaurant.categories;
console.log(a1, b2);

// Very interesting approach. We can use decostruction on already deconstruct array to swtoch places
[b2, a1] = [a1, b2];
console.log(a1, b2);

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);

// Receive nested array
const nested = [2, 3, [4, 5]];
// const [nested1, , nested2] = nested;
// console.log(nested1, nested2);

// Receive nested values aka double destructering
const [val1, , [val2, val3]] = nested;
console.log(val1, val2, val3);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
