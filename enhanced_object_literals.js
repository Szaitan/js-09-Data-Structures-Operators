'use strict';

// The way we can affect object literalls
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Third way which allows for computing
const openingHours = {
  [weekDays[1]]: {
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

  // Early we had openhours inside of our object
  // Now we can affect it with ES6 object enhanced litterals
  // We have to remember about having the same name as external object
  openingHours,

  // ES6 for methods inside of objects has diffrent syntax
  order() {
    console.log('ES6 new syntax for methods');
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
