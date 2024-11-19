'use strict';

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

// Normaly we would have an error if we would try to acces opening hour for item that doesnt exists
// console.log(restaurant.openingHours.mon.open);

// For this WITH (?) optional chain was invented in ES2020
// If the operator is exisint only then follow rest of the code,
// which returns "undefined"
console.log(restaurant.openingHours.mon?.open);

// We can add multiple WITH chains
console.log(restaurant.openingHours?.mon?.open);

// Example with checking opening time
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const ele of days) {
  const open = restaurant.openingHours[ele]?.open ?? 'closed';
  console.log(`On ${ele} we are open at ${open}.`);
}

// Optional chainning in METHODS
console.log(restaurant.order?.(0, 0) ?? 'There is no such function.');

// Optional chainning in ARRAYS
const userArray = [{ name: 'Mike', email: 'test@wp.pl' }];
console.log(userArray[0]?.name || 'User array empty.');
