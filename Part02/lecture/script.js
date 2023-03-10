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

/*
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

//array challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 544, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
