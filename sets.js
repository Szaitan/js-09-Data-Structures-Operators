'use strict';

// Sets are objects which containes unique values, without dupplicates or order
// Creation of Set

const newSet = new Set(['Mike', 'Thomas', 'Mike', 'Jhon', 'Mike']);
console.log(newSet); // ["Mike", "Thomas", "Jhon"]

// Without adding [] in Set () it will iterate over string
console.log(new Set('Mikeal')); // ["M", "i", "k", "a", "e", "l"]

// console.log(new Set(1, 2, 3, 4, 4, 4)); // Error1 is not itterable

// To check the size of Set we use .size property
console.log(newSet.size); // 3

// To check if Set containes data we use .has method
console.log(newSet.has('Mike')); // true
console.log(newSet.has('Jimmy')); // false

// To add to set unique data we use .add method
newSet.add('Pizza');
console.log(newSet); // [ "Mike", "Thomas", "Jhon", "Pizza"]

// To delete a value of from Set we use .delete method
newSet.delete('Mike');
console.log(newSet); // [ "Thomas", "Jhon", "Pizza" ]

// We can itterate over Set elements like in array
for (let obj of newSet) console.log(obj);

// To clear whole Set we use .clear method
newSet.clear();
console.log(newSet); // []
