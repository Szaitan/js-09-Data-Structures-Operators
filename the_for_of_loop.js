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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// The for-of loop
// In it we can use continue and break
for (const item of menu) console.log(item);

// If we would like to have have also number of index we can use
// entries() method. It will return us array with index and item.
for (const item of menu.entries()) {
  console.log(item);
}

// We can use deconstructure on returned arrays
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
