'use strict';

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

// Part 1
const [players1, players2] = game.players;

// Part 2
const [gk, ...fieldPlayers] = game.players[0];

console.log(gk);
console.log(fieldPlayers);

// Part 3
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// Part 4
const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Part 5
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);

// Part 6
function printGoals(...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Player that score the goal: ${names[i]}.`);
  }
  console.log(`Total number of Goals: ${names.length}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log('.................');
printGoals(...game.scored);

// Part 7
team1 < team2 && console.log('Team 1 will win!');
team1 > team2 && console.log('Team 2 will win!');
