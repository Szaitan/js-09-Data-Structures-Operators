'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

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

const restaurant1 = {
  name: 'Capri',
  numGuests: 0,
};

const restaurant2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// OR assigment operator
// Typical short circuiting
restaurant1.numGuests = restaurant1.numGuests || 10;
restaurant2.numGuests = restaurant2.numGuests || 10;

// And here is the usage of OR assigment opearator.
restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;

// However we wills till have the same problem if the num value is 0
// For this we will use ?? operator
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// ..................................
// AND assigment operator
// Typical short circuiting
// restaurant1.owner = restaurant1.owner && '<ANNONYMUS>';
// restaurant2.owner = restaurant2.owner && '<ANNONYMUS>';

// AND assigment operator
restaurant1.owner &&= '<ANNONYMUS>';
restaurant2.owner &&= '<ANNONYMUS>';

console.log(restaurant1);
console.log(restaurant2);
