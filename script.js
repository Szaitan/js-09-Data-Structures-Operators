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

// Using deconstruction inside of function of objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole 12',
  mainIndex: 2,
  starterIndex: 2,
});

// Base of deconstruction of objects
// We are doing it by using {}. Order doesnt matter here.
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// We can give diffrent names when using deconstruction
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// We can set a default value
const { mainMenu: menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables using ()
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Deconstruction on nested objects
const {
  openingHours: {
    fri: { open: o = '', close: c = '' },
  },
} = restaurant;
console.log(o, c);
