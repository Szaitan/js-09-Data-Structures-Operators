// Rest pattern operator and parameter
// Rest pattern is used similar to Spread operator and
// its packing elemnts into array or objects.
// the diffrence is in place where we are using

// REST operator has to be the last in chain!

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

  orderPizza: function (firstIngredient, ...restofIngredients) {
    console.log(`This is your pizza main ingredient: ${firstIngredient}  `);
    console.log(restofIngredients);
  },
};

// REST operator because its used on the left side
const [var1, var2, ...rest] = [1, 2, 3, 4, 5];
console.log(var1, var2, rest); // 1, 2, [3, 4, 5]

// REST operator with skipping elements on left site we have spread operators
// The elements that were skipped are not in package of restofMenu
const [pizza, , risotto, ...restofMenu] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, restofMenu);

// REST in objects
const { sat: weekDays, ...weekend } = restaurant.openingHours;
console.log(weekDays, weekend);

// REST parameter in functions
// Its a little bit similar to arg from python
// Lets say we want to add diffrent number to each other

function addFunction(...numbers) {
  console.log(numbers);
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
}

addFunction(1, 2, 3);
addFunction(4);
addFunction(11, 22, 33);

// We can pass arry in to our function but first we have to spread it
const xData = [1, 2, 3, 4, 5];
addFunction(...xData);

// RESt in object function
restaurant.orderPizza('mushrooms', 'apple', 'pie');
