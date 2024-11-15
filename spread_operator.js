// Spread operator (...)
const arr1 = [1, 2, 3];

// Adding elements of array into new one
const newArr = [5, 6, ...arr1];
console.log(newArr); // [5, 6, 1, 2, 3]

// can be used to pass individual elements
console.log(...arr1); // 5, 6, 1, 2, 3,

// Working with objects array
const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Sushi'];
console.log(newMenu);

// Copy array - shallow version
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1); // [pizza, pasta, etc...]

// Iterables: arrays, strings, maps, sets. Not Objects
console.log([...'Michał']); // [M, i, c, h, a, ł]

// We can use spread operator to pass values into functions
const userInput = prompt('With what would you like your pasta?').split(', ');
console.log(userInput);
console.log(typeof userInput);

restaurant.orderPasta(...userInput);

// Objects spread operators
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

newRestaurant.mainMenu.push('test');
console.log(restaurant.mainMenu);
console.log(newRestaurant.mainMenu);
