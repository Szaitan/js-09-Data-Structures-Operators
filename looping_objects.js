'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '12:00',
    address,
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `Order received. ${this.starterMenu[starterIndex]} and
         ${this.mainMenu[mainIndex]} will be deliver to address: ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your fucking pasta with ingrdient ${ing1}, ${ing2}, ${ing3}`
    );
  },
};

// Looping over object is not possible, without returing array with data from it
// Looping over property name using .keys(), .values() and .entries() property
// Object.keys() returns array with property names
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

// Looping over property values
// Object.values() returns the value of key property

for (const val of Object.values(openingHours)) {
  console.log(val);
}

// Entries on objects
const entries_data = Object.entries(openingHours);
console.log(entries_data);

// We can use deconstruction of value which is object to receive opening and close time
for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`Day ${day}.: opening ${open} and close: ${close}`);
}
console.log('................. BREAK ...............');

// test for restaurant
for (const [i, data] of Object.entries(restaurant)) {
  console.log(`${i}: ${data}`);
}
