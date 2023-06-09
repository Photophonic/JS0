const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Hummels',
    'Hummels',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. destructuring game.players to create two variable arrays of players.
const [players1, players2] = game.players;

//2. create on variable goal keeper and rest with all remaing players.
const [goalkeeper, ...fieldPlayers] = players1;

//3. create array with all players
const allPlayers = [...players1, ...players2];

//4. create new array by unpacking player1 + 3 new players
const p1Final = [...players1, 'Bod', 'Smith', 'Dole'];

//5. create object with nested destructuring. Remember to use {} not []
const {
  //this targets the inner object to the game objects. x: drawy renames the variable
  odds: { team1, x: draw, team2 },
} = game;
//print the odd the new variables
console.log(team1, draw, team2);

//6. create print goals function
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
};

printGoals('Sam', 'Dole', 'Pete');
printGoals(game.scored);

//7. team comparison using and for truthy
team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 1 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console,
   along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console 
  (We already studied how to calculate averages, you can go check if you 
   don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exaclty 
   like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them 
  (except for "draw"). HINT: Note how the odds and the game objects have 
   the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. 
In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1.Use for-of loop to loop through the object's array.
//   Using .entries() will return an array iterator object with
//   use entries on the array to get all keys and value
// use destructing to create a new array and assign the item elements
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player} entries`);
}

// 2. get all the values from the object then average them.
const odds = Object.values(game.odds);
let avg = 0;
//use for of loop to loop throuhgt the new odds array variable
for (const i of odds) avg += i;
avg /= odds.length;

console.log('avg ', avg);

//3. Pass Object.entries(object name) into the function to get the details
//  create an array values from the game.odds object for the loop.
//  NOTE: to get the entries out of the array, use Object.entries(object.name)
//  this is different from an object's own array using game.scored.entries()
for (const [key, values] of Object.entries(game.odds)) {
  // in the object's method x os for draw, this will print draw in the string
  const teamString = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odds of ${teamString} ${values}`);
}

//4.
// So the solution is to loop over the array, and add the array elements
//as object properties, and then increase the count as we encounter a new
//occurence of a certain element
const scorers = {};
for (const i of game.scored) {
  scorers[i] ? scorers[i]++ : (scorers[i] = 1);
}

console.log(Object.entries(scorers));
