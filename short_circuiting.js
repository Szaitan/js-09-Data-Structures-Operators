'use strict';

const restaurnat = {
  orderPizza: function (firstIngredient, ...restOfIngredients) {
    console.log(`${firstIngredient}`);
    console.log(`${restOfIngredients}`);
  },
};

// SHORT CIRCUITING
//------------ OR opertor || ------------------

console.log(undefined || 34); // 34
console.log('test' || 34); // test
console.log(49 || 0); // 48
console.log('' || 0); // 0

// In an expression using the logical OR operator (||), evaluation stops as soon as a true result is encountered. This is because if any operand is true, the entire expression will be true, regardless of the remaining conditions.

console.log(undefined || 0 || null || 34 || undefined || 0); // 34

// Practical use
// But the number of guests is 0 so why is that false? Because of false value of 0
restaurnat.numGuests = 0;
const guests1 = restaurnat.numGuests ? restaurnat.numGuests : 10;
console.log(guests1);

//  or we can do it this way

const guests2 = restaurnat.numGuests || 10;
console.log(guests2);

//------------ AND opertor && ------------------
console.log(undefined && 34); // undefined
console.log('test' && 34); // 34
console.log(49 && 0); // 0
console.log('' && 0); // ""

// In an expression using the logical AND operator (&&), evaluation stops as soon as a false result is encountered. This is because, in the case of &&, if any operand evaluates to false, the entire expression will be false, regardless of the remaining conditions.

console.log('test' && 1 && true && null && undefined && 0); // null

// Practical use
if (restaurnat.orderPizza) {
  restaurnat.orderPizza('mushrooms', 'apple', 'papaya');
}

restaurnat.orderPizza && restaurnat.orderPizza('mushrooms', 'apple', 'papaya');
