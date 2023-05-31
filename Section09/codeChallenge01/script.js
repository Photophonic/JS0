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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. destructuring game.players to create two variable arrays of players.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2. create on variable goal keeper and rest with all remaing players.
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper);
console.log(fieldPlayers);

const [goalkeeper2, ...fieldPlayers2] = players2;
console.log(goalkeeper2);
console.log(fieldPlayers2);

//3. create array with all players
const allPlayers = [...players1, ...players2];

//4. create new array by unpacking (spread) player1 + 3 new players
const p1Final = [...players1, 'Bod', 'Smith', 'Dole'];
const p2Final = [...players2, 'Pete', 'Stan', 'Rob'];
console.log(p1Final);
console.log(p2Final);

//5. create object with nested destructuring. Remember to use {} not []
const {
  //this targets the inner object to the game objects.
  odds: { team1, x: draw, team2 },
} = game;

//6. create print goals function
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Sam', 'Dole', 'Pete');
printGoals(...game.scored);

//7. team comparison using and for truthy
team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 1 is more likely to win');
