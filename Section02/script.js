const age = 17;
const drivingAge = 18;

if (age >= drivingAge) {
  console.log("Old enough ");
} else {
  console.log("Not yet " + (drivingAge - age) + "years left");
}

const birthYear = 2021;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`You were born in the ${century} century`);
