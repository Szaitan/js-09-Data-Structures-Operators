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

// As we can see short circuting for OR operator will return first value which is TRUE

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

// As we can see circuting for AND operator return first value which is FALSE or the last value if everything is True

console.log('test' && 1 && true && null && undefined && 0); // null

// Practical use
if (restaurnat.orderPizza) {
  restaurnat.orderPizza('mushrooms', 'apple', 'papaya');
}

restaurnat.orderPizza && restaurnat.orderPizza('mushrooms', 'apple', 'papaya');
