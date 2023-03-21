/*
let mweight = 95;
let mheight = 1.88;

let jweight = 85;
let jheight = 1.76;

let mbmi = mweight / (mheight * mheight);
let jbmi = jweight / (jheight * mheight);

console.log(mbmi);
console.log(jbmi);

if (mbmi > jbmi) {
  console.log(`${mbmi} Mark's BMI is higher than John's!`);
} else {
  console.log(`${jbmi} John's BMI is higher than MArk's!`);
}
*/

/*
"use strict";

function bmiCalc(mass, height) {
  let bmi = mass / (height * height);
  //return `Your BMI is ${bmi}`;
  return bmi;
}

const markBmi = bmiCalc(95, 1.88);
const johnBmi = bmiCalc(85, 1.76);

if (markBmi > johnBmi) {
  console.log(`${markBmi} Mark's BMI is higher than John's!`);
} else {
  console.log(`${johnBmi} John's BMI is higher than MArk's!`);
}

function describeCountry(country, population, capitalCity) {
  return `${country} has a population of ${population} and its capital city is ${capitalCity}`;
}

let usPop = describeCountry("US", "6 million", "Washington DC");
console.log(usPop);

function calcAge1(birthYear) {
  let year = new Date().getFullYear();
  return year - birthYear;
}

const age1 = calcAge1(1980);

var age2 = function (birthYear) {
  let year = new Date().getFullYear();
  return year - birthYear;
};

console.log(age1, age2(1980));

let age3 = (birthyear) => 2023 - birthyear;

console.log(age3(1980));

const toRetire = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(toRetire(1980));

function foodProcessor(fruit) {
  return fruit * 4;
}

function juicer(item1, item2) {
  let pieces1 = foodProcessor(item1);
  let pieces2 = foodProcessor(item2);

  return `Juice made with ${pieces1} apples and ${pieces2} oranges`;
}

function calcAge(birthYear) {
  let year = new Date().getFullYear();
  return year - birthYear;
}

const toRetire = function (birthYear) {
  let age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};


function calcAverage(score1, score2, score3) {
  let scoreAverage = (score1 + score2 + score3) / 3;
  console.log(scoreAverage);
  return scoreAverage;
}

function checkWinner(avgTeam1, avgTeam2) {
  if (avgTeam1 >= 2 * avgTeam2) {
    console.log(`Dolphins win (${avgTeam1} vs. ${avgTeam2})`);
  } else if (avgTeam2 >= 2 * avgTeam1) {
    console.log(`Koalas win (${avgTeam2} vs. ${avgTeam1})`);
  } else {
    console.log("No winner ");
  }
}

let dolphins = calcAverage(85, 54, 41);

let koalas = calcAverage(23, 34, 27);

checkWinner(dolphins, koalas);
*/

/*
//arrays
const friends = ["Bob", "Dole", "Pete", "Joe"];

//const years = new Array(1991, 1984, 2008, 2022);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Smith";

const person = ["Sam", 27, "Employed"];

//Calc Age
const calcAge = function (birthYear) {
  let year = new Date().getFullYear();
  return year - birthYear;
  turn;
};

const years = [1990, 1967, 2002, 1932, 1968];

for (i = 0; i < years.length; i++) {
  console.log(calcAge(years[i]));
}

*/

/*
//array methods
const friends = ["Bob", "Dole", "Pete", "Joe"];

//moves soemthing to the end of the array
friends.push("Paul");

//Moves something to the front of the array
friends.unshift("Bill");

console.log(friends);

//remove element from the end
friends.pop();

//remoevs element from the front of the array
friends.shift("Bill");

console.log(friends);

//get element location from array
console.log(friends.indexOf("Dole"));

//true/false if array contains value
console.log(friends.includes("Dole"));

if (friends.includes("Bob")) {
  console.log("You have a friend named Bob");
}

*/

/*
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

/*
//array challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 544, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
*/

/*
//objects with properties of the object in the {}
const person = {
  firstName: "Bob",
  lastName: "Dole",
  job: "Person",
  age: new Date().getFullYear() - 1944,
  //arrays should be used for more structured data, vs in object
  friends: ["Sam", "John", "Pete", "Joe"],
};

//means to retreive info
console.log(person.firstName);

//using [] brackets allows for computation of property name
console.log(person["lastName"]);

const nameKey = "Name";

console.log(person["first" + nameKey]);
console.log(person["last" + nameKey]);

const interest = prompt("Ask me something about person?");

person.location = "A place";

person["socialMedia"] = "none@yup.com";

//evaluates if output is true/false if it exists
if (person[interest]) {
  console.log(person[interest]);
} else {
  console.log("try again");
}

console.log(
  `${person.firstName} has ${
    person.friends.length
  } friends and his best friend is ${[person.friends[0]]} `
);
*/

/*
const person = {
  firstName: "Bob",
  lastName: "Dole",
  job: "person",
  birthYear: 1974,
  friends: ["Sam", "John", "Pete", "Joe"],
  driversLicense: true,

  calcAge: function () {
    const year = new Date().getFullYear();
    return year - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job} `;
  },
};

//console.log(person.getSummary());

const myCountry = {
  name: "United Staes",
  population: 17000000,
  capital: "Washington DC",
  language: ["English", "Spanish"],
  neighbors: ["Canada", "Mexico"],
  isIsland: false,
  describe: function () {
    return `${this.name} has a population of ${this.population} people, ${this.language[0]} is the main language. There are ${this.neighbors.length} neighboring countries.`;
  },
  checkIsland: function () {
    return this.neighbors.length > 0
      ? (this.isIsland = false)
      : (this.isIsland = true);
  },
};

const person1 = {
  name: "Mark",
  mass: 78,
  height: 1.68,
  bmi: 0,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
    //console.log(this.bmi);
  },
};

const person2 = {
  name: "John",
  mass: 92,
  height: 1.95,
  bmi: 0,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
    //console.log(this.bmi);
  },
};

person1.calcBMI();
person2.calcBMI();

if (person1.bmi > person2.bmi) {
  console.log(`${person1.bmi} is higher than ${person2.bmi}`);
} else {
  console.log(`${person2.bmi} is higher than ${person1.bmi}`);
}
*/

//loops

/*
for (i = 0; i < 10; i++) {
  console.log(`lift weights rep ${i + 1}`);
}
*/

/*
const personArray = [
  "Bob",
  "Dole",
  2023 - 1980,
  "teacher",
  ["Pete", "Bill", "Steve"],
];

//empty array
const types = [];

for (i = 0; i < personArray.length; i++) {
  console.log(personArray[i]);
  //filling an array
  //types[i] = typeof personArray[i];
  types.push(typeof personArray[i]);
}

for (i = 0; i < types.length; i++) {
  console.log(types[i]);
}

const years = [1983, 1953, 1988, 1923];
const age = [];

//example of calculation and adding to a new array
for (i = 0; i < years.length; i++) {
  age.push(2023 - years[i]);
}

console.log(age);

//continue(stops current itteration and continues loop)
// & break (terminates the whole loop)
console.log("Continue Statement");
for (i = 0; i < personArray.length; i++) {
  if (typeof personArray[i] !== "string") {
    continue; //skips over the numbers and array.
  } else {
    //only log strings
    console.log(personArray[i]);
  }
}

console.log("Break Statement");
for (i = 0; i < personArray.length; i++) {
  if (typeof personArray[i] !== "string") {
    break; //ends loop when not a string.
  } else {
    //only log strings
    console.log(personArray[i]);
  }
}


const listOfNeighbor = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweeden", "Russia"],
];

for (i = 0; i < listOfNeighbor.length; i++) {
  console.log("starting outer loop");
  for (j = 0; j < listOfNeighbor[i].length; j++) {
    console.log(listOfNeighbor[i][j]);
  }
}

const person = [
  "Bob",
  "Dole",
  2023 - 1974,
  "person job",
  ["Pete", "Joel", "Dude"],
];

for (i = person.length - 1; i >= 0; i--) {
  console.log(person[i]);
}
*/

// for (i = 1; i <= 10; i++) {
//   console.log(`Lifting weights rep ${i}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting more weights rep ${rep}`);
//   rep++;
// }

/*
let roll = Math.trunc(Math.random() * 6) + 1;
while (roll !== 6) {
  console.log(`Your roll is ${roll}`);
  //Assign new value to roll as the conditional for the loop
  roll = Math.trunc(Math.random() * 6) + 1;
  if (roll === 6) {
    console.log(`Your roll is ${roll}`);
  }
}*/

//Challenge 4 Tip calculator
/*
for (i = 0; i < personArray.length; i++) {
  console.log(personArray[i]);
  //filling an array
  //types[i] = typeof personArray[i];
  types.push(typeof personArray[i]);
}

for (i = 0; i < types.length; i++) {
  console.log(types[i]);
}

const years = [1983, 1953, 1988, 1923];
const age = [];


//example of calculation and adding to a new array
for (i = 0; i < years.length; i++) {
  age.push(2023 - years[i]);
}
*/

//const bills = [125, 544, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//const bills = [10, 10, 10];
const tips = [];
const totals = [];

//array challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (i = 0; i < bills.length; i++) {
  //console.log(calcTip(bills[i]));
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(totals[i]);
}

const calcAvg = function (array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

console.log(`Total average is ${calcAvg(totals)}`);
*/

const temp1 = [3, -1, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [5, 2, 6, 8, 33, 1, 8, -1, 0, "error", "error"];
//determin highest and lowest numbers in the array?
//could be a sensor error
//if an error is recevied, ignore it, then find max, then find min,
//then subtract min from max and return the result.

/*
const calcTemp = function (tempArr) {
  const max = Math.max(...tempArr);

  const min = Math.min(...tempArr);

  let result = [max, min];
  return result;
};

console.log(calcTemp(temp));
*/

const calcTemp = function (temp1, temp2) {
  let temps = temp1.concat(temp2);
  let max = temps[0];
  let min = temps[0];

  //console.log(temps);
  for (i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;

    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTemp(temp1, temp2));

//now the function should take two arrays
