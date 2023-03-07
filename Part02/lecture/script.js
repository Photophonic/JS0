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
