'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  superMenu: [
    ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    ['Pizza', 'Pasta', 'Risotto'],
  ],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Enhanced object literals can be called directly.
  // object openingHours is above, and now part of this object
  // openingHours,

  // ES6 enhanced object literals
  openingHours,
  // using an object as the argument, att the {} and variable names to
  // destructure the object on the spot to the new variables for the function
  // use = ITEM to set defaults on the inbound.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = '100 place',
  }) {
    console.log(
      // calls THIS starterMenu and uses the number as the array index
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // Enhance functions drop the function key word
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your order ${ing1}, ${ing2}, ${ing3}`);
  },

  // standard function calls in an object
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Video 103 destructuring arrays
//to destructure arrays use [] braces

//without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log('previous ', a, b, c);

//with destructuring (unpacking) create variables from the array positions.
const [x, y, z] = arr;
console.log('destuctured ', x, y, z);

//to target specific items from an object. to skip, leave a gap.
const [first, , third] = restaurant.categories;

console.log(first, third);

// using destructuring in embededded array
const [sMenu, mMenu] = restaurant.superMenu;

//to swtich order of categories, swap the order of declare variables
const [secondary, , main] = restaurant.categories;
console.log(main, secondary);

//Call the method in the object to return an array of food items to destructure
const [sideDish, mainDish] = restaurant.order(2, 0);
console.log(sideDish, mainDish);

//nested arrays for destructuring
const nested = [2, 3, [5, 6]];
//make an inner array variable group to capture the nested array from nested
const [d, , [e, f]] = nested;

console.log(d, e, f);

//to set default variables for destructuring
const defaultArr = [8, 9];
//place an = SOMETHING to set a default value in case the incoming array is smaller
const [p = 1, q = 1, r = 1] = defaultArr;
console.log(p, q, r);

//video 104 destructing objects
//to destructure objects, use the {} braces and specify the properties as new variables
const { name, categories, openingHourz } = restaurant;

//To name our own variable names from existing properties.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//to set default variables when properties might not exist from the object
//can be combined with rename option too (starters)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables for objects
let aa = 111;
let bb = 999;
console.log('Original ', aa, bb);
const obj = { aa: 23, bb: 7, cc: 14 };

// to mutate existing variables from an object, wrap it in ()
({ aa, bb } = obj);

console.log('mutated ', aa, bb);

// nested object destructuring. Target the main object, then the nested opbject
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log('open ', open, 'close ', close);

// calling the function in the object, and passing an object into the arguments
// see restaurant.orderDelivery() above.
restaurant.orderDelivery({
  time: '22:30',
  address: '111 South Cherry',
  mainIndex: 2,
  starterIndex: 2,
});

// using default values within the object function
restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
});

// video 105 spread operator
// used to unpack elemts from an array into variables

// old way without spread
const arrr = [7, 8, 9];
const oldWay = [1, 2, arr[0], arr[1], arr[2]];
console.log(oldWay);

// array with spread operator.
// make a new array, then when using old array, spread with ...arrayName
// this will unpack the array into the new array's positions
const newWay = [1, 2, ...arrr];
console.log('Spread ', newWay);

// spread can be used to output the individual elements of the array
console.log(...newWay);

// to create a new array with new values of an existing array.
const newMenu = [...restaurant.mainMenu, 'Toast', 'Pop-Tarts'];
console.log(...newMenu);

// the spread operator is similar to destrcuturing but does not create variables.
// can only be user where values are separated by commas.

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);

// to join multiple arrays.
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...joinMenu);

// the spead operator works on iterable items. Arrays, strings, maps, sets
// DOES NOT WORK ON OBJECTS!!!
const str = 'Bob Dole';
const letters = [...str, '', 's.'];
console.log(letters);

// create a new array with elemets
const ingredients = ['food', 'food2', 'food3'];
// then call the method in the object to pass in the array elements
restaurant.orderPasta(...ingredients);

// Create a new object using the {} then add new methods to the object
const newRestaurant = { ...restaurant, found: 'Bod Dole', foundedYear: 1998 };
console.log(newRestaurant);

// to copy the new object. Remember, {} not []
const restaurantCopy = { ...newRestaurant };
// rename the place in the copy
restaurantCopy.name = 'ShowBizz Pizza';
console.log(restaurantCopy);

// video 106 rest pattern
// rest pattern is similar to the spread. Used to pack elements into an array

// spread operator
const testArr = [1, 2, 3, 4, 5];
// spread is on the right of assignments
const spread = ['a', 'b', ...testArr];

// rest operator is on the left side of assignments
const [xx, yy, ...others] = spread;
// this assigned 'a' to xx. 'b', to yy, the remainign parts of spread to others array
console.log(xx, yy, others);
// a b (5) [1, 2, 3, 4, 5]

// using rest and spread operators
// create new variables pizza, risotto, new array named otherFood
// then destructure the main and side menu arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest operator with Objects
const { sat, ...weekday } = restaurant.openingHours;
console.log(sat, weekday);

// functions with spread operator
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 6, 2));

const rr = [...testArr];

console.log(add(...rr));

// create method in main object. Will create variable of main item, then rest array
restaurant.orderPizza('Pineapple', 'Sauce', 'Cheese', 'stuff');

restaurant.orderPizza('Cheese');

// 108 nullish, if the first value null or undefined, return the second
const guestCorrect = restaurant.numGuests ?? 50;
console.log(guestCorrect);

// 109 logical assignment opperators
const rest1 = {
  name: 'food place',
  numGuests: 20,
};

const rest2 = {
  name: 'food bard',
  owner: 'Bob Dole',
};

// using the OR operator, truthy eval - return first item if exists.
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest2.numGuests);

// rest2.numGuests = rest1.numGuests || 10;
// console.log(rest2.numGuests);

// using the logical assignment operator
// this will assign a value if the value is falsy
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// the logical nullish variant
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest2.numGuests);

// using the && operator will cause the second option to be selected
rest2.owner = rest2.owner && '<ANONYMOUS>';

// 111 Looping Arrays - for-of-loop
// using a standard for loop
const oldMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let i = 0; i < oldMenu.length; i++) {
  console.log([i], oldMenu[i]);
}

// for-of loop
for (const i of oldMenu) console.log(i);

// to get the element of the array, use the entries method.
for (const i of oldMenu.entries()) {
  console.log(i);
}

// to destructure the array to get the position and element
for (const [el, i] of oldMenu.entries()) {
  console.log(el, i);
}

// 112 Enhance Object Literals
// much of the code for this is above in the object

// 113 optional object chaining, if an object does not exist, undefined is returned
console.log(restaurant?.openingHours);

// 114 looping objects, keys, and values
// to view the properties of this. ALlos us to see how long hte thing is
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`);

// looping over the KEYS
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// to loop over the VALUES of the object
const value = Object.values(openingHours);
// returns the open/close of the days of week
console.log(value);

for (const day of Object.values(openingHours)) {
  console.log(day);
}

// to loop over the ENTRIES of the object, this is the entire object
const entries = Object.entries(openingHours);
console.log(entries);

// to loop over the contents of the object:
// first value is the key, then the next value is an object itself.
// use additional destructuring to get the values of the object
// then they can be inserted into the variables
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}

// An additional example to make it easier to visualize.
const person = {
  firstName: 'Arunesh',
  lastName: 'kumar',
  birthYear: 1999,
};

console.log(person);

// get all keys
for (const key of Object.keys(person)) {
  console.log(key);
}

// get all values
for (const value of Object.values(person)) {
  console.log(value);
}

// get all keys and value
for (const [key, value] of Object.entries(person)) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Video 116 Sets
// They are a collection of unique values

// need to pass in an iterable, such as an array
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Bread', 'Pasta']);
console.log(orderSet);
// Set(3) {'Pasta', 'Pizza', 'Bread'}
// Elements are unique, no order to contents or index

// To get the size, not length
console.log(orderSet.size);

// to check if an element is in the set, will return true/false
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Food'));

// to add an element to the set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

console.log(orderSet);

// to delete elements
orderSet.delete('Bread');
console.log(orderSet);

// there is no way to pull data out of a set

// since Sets are iterables, they can be looped over.
for (const i of orderSet) {
  console.log(i);
}

// main usecase is to remove duplicates from an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manaager', 'Chef', 'Waiter'];

// create new set and pass in the staff array
const staffSet = [...new Set(staff)];

// loop over the new array created from the array set
for (const [el, i] of staffSet.entries()) {
  console.log(el, i);
}

// to count the unique characters in a string
console.log(new Set('hfguisbfbalifbadsbflagsfug').size);

// video 117 Maps

// the easiest way to create a map is to create an empty one first
const rest = new Map();

// similar to the add method for set. Add key, then item
rest.set('name', 'FoodHut');
rest.set(1, 'FoodHut');
rest.set(2, 'FoodHut');

console.log(rest);

// Map.set can chain various methods because the updated version is returned
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('starterMenu', [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
  ])
  .set('mainMenu', ['Pizza', 'Pasta', 'Risotto']);

// using the get method will return the coresponding value
console.log(rest.get('name'));
console.log(rest.get('categories'));

// video 118 maps cont.

// alternate way to create maps with lots of values.
// you can pass in an array. First position will be the key, second = value
const question = new Map([
  ['question', 'What is the programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

// this is the same array structure when calling Object.entries(something);
console.log(Object.entries(openingHours));

// to convert objects to maps
const hoursMap = new Map(Object.entries(openingHours));
// creates an array of arrays, converting an object into an iterable array
console.log(hoursMap);

// maps are iterables, therefore the for of loop works with them.

// use map.get(mapvalue) to return something
console.log(question.get('question'));
// loop over the map
for (const [key, value] of question) {
  // use typeof to only return the questions 1 ~ 3
  if (typeof key === 'number') {
    console.log(key, value);
  }
}

//to get input for the question
//const answer = Number(prompt('Your Answer??'));
const answer = 2;

console.log(answer);

console.log(question.get(answer === question.get('correct')));

// use arrays when you need to store the values in order or need duplicates
// also when you need to manipulate data

// use sets when dealing with unique values and order does not matter

// objects used to describe data structures that require keys
// the traditional key/value store
// very easy to write and access data
// used when you need functions (methods)

// maps can have keys and any data type
// use to simply map keys to values
// cannot use functions

// Video 121 Strings p1
//Strings have many of the same methods and options as arrays
const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log('B737'[0]);
console.log(airplane.length);

// will return first occurrence of 'r'
console.log(airplane.indexOf('r'));

// will return last occurrence or 'r'
console.log(airplane.lastIndexOf('r'));

// can combine with slice to find items based of index
console.log(airplane.slice(airplane.indexOf('i')));
// the index from lastIndexOf will tell slice where to start
console.log(airplane.slice(airplane.lastIndexOf('P')));

// returns Air (end - beginning is how many spaces it will extract)
console.log(airplane.slice(4, 7));

console.log(airplane.slice(airplane.indexOf('T'), airplane.lastIndexOf('A')));
console.log(airplane.slice(airplane.indexOf(' '), airplane.lastIndexOf(' ')));

// negative value will cut off value in the slice
// this pulls only the last two
console.log(airplane.slice(-2));

// this will start at position 1, not 0, and extract to the last character -1
console.log(airplane.slice(1, -1));

const checkSeat = function (seat) {
  // check if seat letter is B or E. This will be a middle seat
  const row = seat.slice(-1);
  if (row === 'B' || row === 'E') {
    console.log('Middle');
  } else {
    console.log('not middle');
  }
};

checkSeat('11C');

// video 122 more features
const airline = 'TAP Air Europe';

// Upper & lower transformation
console.log(airline.toUpperCase(), airline.toLowerCase());

// Fix capitalization
const passenger = 'jOnAS';
const passLower = passenger.toLocaleLowerCase();
// use slice to pull the rest of the string and recombine
const passUpdated = passLower[0].toUpperCase() + passLower.slice(1);
console.log(passUpdated);

// can also use a function to simplify
const fixName = function (name) {
  const lower = name.toLocaleLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
};

const lowerName = fixName('sTeVe');
console.log(lowerName);

// compare email
const email = 'tes1t@gmail.com';
const loginEmail = ' Test@Gmail.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();

//to do in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

if (email === normalizedEmail) {
  console.log('Login');
} else {
  console.log('Invalid');
}

// to replace parts of string
const price = '288,97';
const usPrice = price.replace(',', '.');
console.log(usPrice);

const announcement = 'All passengers come to door 23. Now boarding door 23';
const annRep = announcement.replace('door', 'gate');
console.log(annRep);

// split method
// will split the string into elements of an array based on split parameter
console.log('a+very+nice+string'.split('+'));

// Can use split with destructuring to assign to variables
const [firstNames, lastNames] = 'Bob Dole'.split(' ');

// Join method is the opposite of split.
const newName = ['Mr.', firstNames, lastNames.toUpperCase()].join(' ');
console.log(newName);

//
const capitalName1 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const i of names) {
    namesUpper.push(i[0].toUpperCase() + i.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalName1('jessica ann smith davis');

// updated version to replace
const capitalName2 = function (name) {
  // create split array on a space
  const names = name.split(' ');
  // create an empty array to house the modified elements
  const namesUpper = [];
  // for of loop on the split array names
  for (const n of names) {
    // namesUpper.push(i[0].toUpperCase() + i.slice(1));

    // push into the empty array current itteration of n
    // and modify the string with replace position/with what of same position
    // in this case, the first position of each word in each element
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  // use the join method to recombin the new elements from the new array
  console.log(namesUpper.join(' '));
};

capitalName2('jessica sue sally davis');

// padding, behaves just like LPAD/RPAD
const message = 'Go to gate 23';
console.log(message.padStart(20, '*').padEnd(40, '+'));

const maskCard = function (number) {
  // cheater way to make the number a string.
  const str = number + '';
  // select the last four numbers from the string
  const lastFour = str.slice(-4);
  // return the variable lastFour with a padding of *
  // padding is derived from the length of the initial str variable.
  return lastFour.padStart(str.length, '*');
};

console.log(maskCard(8465627542856272));
